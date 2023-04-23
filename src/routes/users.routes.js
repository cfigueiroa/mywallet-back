import { Router } from "express";
import helloWorld from "../controllers/helloWorld.controller.js";

const usersRoutes = Router();

usersRoutes.post("/register", helloWorld);
usersRoutes.post("/login", helloWorld);
usersRoutes.post("/logout", helloWorld);

export default usersRoutes;
