import { Router } from "express";
import helloWorld from "../controllers/helloWorld.controller.js";

const transactionRoutes = Router();

transactionRoutes.post("/:userId", helloWorld);
transactionRoutes.get("/:userId", helloWorld);
transactionRoutes.delete("/:userId/:transactionId", helloWorld);
transactionRoutes.put("/:userId/:transactionId", helloWorld);

export default transactionRoutes;
