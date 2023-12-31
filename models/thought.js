const {Schema, model} = require("mongoose")

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: timeFormat,
  },
})

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: timeFormat,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
})

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length
})

function timeFormat(createdAt) {
  createdAt = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

const Thought = model("thought", thoughtSchema)

module.exports = Thought
