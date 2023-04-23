import db from "../database/database.connection.js";

async function helloWorld(req, res) {
  const method = req.method;
  const path = req.path;
  const users = await db.users.find().toArray();
  console.log({ users });
  res.send(`Hello World from ${method} ${path}`);
}

export default helloWorld;
