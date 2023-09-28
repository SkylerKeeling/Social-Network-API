const router = require("express").Router()
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend,
} = require("../../controllers/userController.js")

router.route("/").get(getAllUsers).post(createUser)

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser)

router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(removeFriend)

module.exports = router
