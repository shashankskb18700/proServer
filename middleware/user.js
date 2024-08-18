const { getUser } = require("../services/auth");
const { handleUserLogIn } = require("../controllers/user");

async function restrictToLoggedInUser(req, res, next) {
  const userUid = req.cookies?.uid;
  // console.log(req);

  if (!userUid) handleUserLogIn(req, res);

  const user = getUser(userUid);

  if (!user) handleUserLogIn(req, res);

  req.user = user;

  next();
}

module.exports = restrictToLoggedInUser;
