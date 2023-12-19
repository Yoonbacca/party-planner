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
      required: true,
    },
    date: {
      type: Date,
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
    },
    guests: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
  },
);

const Party = model('Party', partySchema);

module.exports = Party;
