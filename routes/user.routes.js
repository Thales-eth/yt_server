const router = require("express").Router();
const { validateToken } = require('../middleware/validateToken.middleware')
const { getUsers, getLoggedUser, deleteUser } = require("../controllers/user.controller")

router.get("/list", getUsers)
router.get("/getLoggedUser", validateToken, getLoggedUser)
router.delete("/delete/:id", deleteUser)

module.exports = router;
