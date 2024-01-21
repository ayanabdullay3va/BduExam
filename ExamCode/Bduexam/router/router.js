const express = require("express")
const UserController = require("./../controller/controllers")
const router = express.Router()
router.get("/users", UserController.getUser)
router.post("/users", UserController.postUser)
router.delete("/users/:id", UserController.deleteUser)

module.exports = router