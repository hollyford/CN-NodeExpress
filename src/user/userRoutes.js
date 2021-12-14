const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userController");
const { hashPassword, verifyHash } = require("../middleware");
const userRouter = Router();

userRouter.post("/addUser", hashPassword, addUser);
userRouter.get("/login", verifyHash);
userRouter.get("/listUsers", listUsers);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;