const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, "Name is required"],
    },
    avatar: {
      type: String,
    },
    followers: {
      type: Number,
      required: true,
    },
    tweets: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User,
};
