import { Router } from "express";
import usersRoutes from "./users.routes.js";
import transactionRoutes from "./transactions.routes.js";

const routes = Router();

routes.use(usersRoutes);
routes.use(transactionRoutes);

routes.get("/keep-alive", (_req, res) => res.sendStatus(200));
routes.all("*", (_req, res) => {
  res.sendStatus(404);
});

export default routes;
