import { Router } from "express";
import users from "../controllers/users.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import userSchema from "../schemas/user.schema.js";
import { authValidation } from "../middlewares/auth.middleware.js";

const usersRoutes = Router();

usersRoutes.post("/register", validateSchema(userSchema), users.register);
usersRoutes.post("/login", users.login);
usersRoutes.post("/logout", authValidation, users.logout);

export default usersRoutes;
