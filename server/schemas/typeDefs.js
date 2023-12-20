const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    parties: [Party]
    friends: [User]
  }
  
  type Party {
    _id: ID!
    name: String!
    description: String
    dateTime: String!
    location: String!
    host: User!
    guests: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    party(partyId: ID!): Party
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser: User
    addParty(name: String!, description: String!, dateTime: String!, location: String!, host: String!, guests: [String]): Party
  }
`;

module.exports = typeDefs;
