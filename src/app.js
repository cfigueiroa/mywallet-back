import express from "express";
import cors from "cors";
import routes from "./routes/index.routes.js";
import keepAlive from "./utils/keepAlive.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

setInterval(keepAlive, 30000);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}...`));
