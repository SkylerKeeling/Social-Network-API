const {User} = require("../models")

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async getOneUser(req, res) {
    try {
      const user = await User.findOne(
        {_id: req.params.userId},
        {
          $addToSet: {thought, friends},
        }
      ).select("-__v")

      if (!user) {
        return res.status(404).json({message: "No user found"})
      }

      res.json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async createUser(req, res) {
    try {
      const User = await User.create(req.body)
      res.json(User)
    } catch (err) {
      return res.status(500).json(err)
    }
  },

  async updateUser(req, res) {
    try {
      const course = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req.body},
        {runValidators: true, new: true}
      )

      if (!user) {
        res.status(404).json({message: "No user found!"})
      }

      res.json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete(
        {_id: req.params.courseId},
        {$pull: {thought: req.params.thoughtId}}
      )

      if (!user) {
        res.status(404).json({message: "No user found"})
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
}
