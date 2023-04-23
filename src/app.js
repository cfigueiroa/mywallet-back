import cors from "cors";
import express from "express";
import routes from "./routes/index.routes.js";
import startKeepAlive from "./utils/keepAlive.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
  startKeepAlive();
});
