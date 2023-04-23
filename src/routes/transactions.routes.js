import { Router } from "express";
import transactionsController from "../controllers/transactions.controller.js";
import authValidation from "../middlewares/auth.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import transactionSchema from "../schemas/transaction.schema.js";

const transactionRoutes = Router();

transactionRoutes.use(authValidation);

transactionRoutes.post("/transactions/:type", validateSchema(transactionSchema), transactionsController.create);
transactionRoutes.get("/transactions", transactionsController.read);

// transactionRoutes.delete("/transactions/:transactionId", del);
// transactionRoutes.put("/transactions/:transactionId", update);

export default transactionRoutes;
