import db from "../database/database.connection.js";

async function create(req, res) {
  const { userId } = res.locals.session;
  await db.transactions.insertOne({ ...req.body, userId });
  res.sendStatus(201);
}

async function read(_req, res) {
  const { userId } = res.locals.session;
  const transactions = await db.transactions.find({ userId }).toArray();
  res.send(transactions).status(201);
}

export default { create, read };
