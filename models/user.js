import {isEmail} from "validator"
const {Schema, model} = require("mongoose")

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "invalid email"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "friends",
    },
  ],
})

userSchema.virtual("friendCount").get(function () {
  return this.friends.length
})

const User = model("user", userSchema)

module.exports = User
