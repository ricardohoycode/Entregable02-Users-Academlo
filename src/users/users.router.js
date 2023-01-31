const router = require("express").Router();

const usersServices = require("./users.services");

router.get("/", usersServices.findAllUsers);
router.post("/", usersServices.createNewUser);
router.get("/:id", usersServices.findUserById);

module.exports = router;
