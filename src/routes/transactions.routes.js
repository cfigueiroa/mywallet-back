import { Router } from "express";
import helloWorld from "../controllers/helloWorld.controller.js";

const transactionRoutes = Router();

transactionRoutes.post("/transactions/:userId", helloWorld);
transactionRoutes.get("/transactions/:userId", helloWorld);
transactionRoutes.delete("/transactions/:userId/:transactionId", helloWorld);
transactionRoutes.put("/transactions/:userId/:transactionId", helloWorld);

export default transactionRoutes;
