import { Router } from "express";
import usersRoutes from "./users.routes.js";
import transactionRoutes from "./transactions.routes.js";

const routes = Router();

routes.use(usersRoutes);
routes.use("/transactions", transactionRoutes);

routes.all("*", (_req, res) => {
  res.sendStatus(404);
});

export default routes;
