import db from "../database/database.connection.js";
import errors from "../errors/index.js";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) throw errors.unauthorized();

  const session = await db.sessions.findOne({ token });
  if (!session) return res.sendStatus(401);

  res.locals.session = session;

  next();
}
