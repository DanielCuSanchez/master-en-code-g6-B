const { Router } = require("express");

const { postOneUser, getUsers, getOneUser } = require("./users.controller");

const router = Router();

router.post("/", postOneUser);
router.get("/", getUsers);
router.get("/:id", getOneUser);

module.exports = router;
