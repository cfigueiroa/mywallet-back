import { Router } from "express";
import transactionRoutes from "./transactions.routes.js";
import usersRoutes from "./users.routes.js";

const routes = Router();

routes.get("/keep-alive", (_req, res) => res.sendStatus(200));

routes.use(usersRoutes);
routes.use(transactionRoutes);

routes.all("*", (_req, res) => {
  res.sendStatus(404);
});

export default routes;
