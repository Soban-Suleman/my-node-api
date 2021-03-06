const express = require("express");

const router = express.Router();
const {
  getUsers,
  postUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

router.route("/").get(getUsers).post(postUser);
router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);
module.exports = router;
