const { User, Party } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('parties').populate('friends');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('parties');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    parties: async (parent, { host }) => {
      return Party.find({ host: host }).populate('host').populate('guests');
    },
    party: async (parent, { partyId }) => {
      return Party.findById({_id: partyId}).populate('host').populate('guests');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    addParty: async (parent, { name, description, dateTime, location, host, guests }) => {
      try {
        const hostUser = await User.findById({_id: host});
  
        const party = await Party.create({ name, description, dateTime, location, host, guests });
  
        hostUser.parties.push(party);
        await hostUser.save();
  
        return party;
      } catch (err) {
        throw err;
      }
    }
  },
};

module.exports = resolvers;
