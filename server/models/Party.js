const { Schema, model } = require("mongoose");

const partySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    dateTime: {
      type: Date,
      default: () => {
        const currentDate = new Date();
        // Add one year (in milliseconds: 365 days * 24 hours * 60 mins * 60 secs * 1000 ms)
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        return currentDate;
      },
      min: Date.now,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guests: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
  },
);

const Party = model('Party', partySchema);

module.exports = Party;
