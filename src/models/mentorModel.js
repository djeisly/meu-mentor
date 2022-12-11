const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,

    mentorName: {
      type: String,
      required: true,
    },

    expertise: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      required: true,
    },

    linkedin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mentor", mentorSchema);
