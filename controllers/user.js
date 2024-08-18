const User = require("../model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;
  try {
    await User.create({ username, email, password });

    return res.status(200).json({
      success: true,
      message: `Successfully signed up ,please login`,
      redirectUrl: "https://crown-db-50da8.web.app/auth",
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: `Email already used. Please use a different email.`,
      redirectUrl: "https://crown-db-50da8.web.app/",
    });
  }
}

async function handleUserLogIn(req, res) {
  console.log("login");
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Your email or password is wrong",
        redirectUrl: "https://crown-db-50da8.web.app/",
      });
    } else {
      const token = setUser(user);
      res.cookie("uid", token, { httpOnly: true, maxAge: 100000 });

      return res.status(200).json({
        success: true,
        message: `Welcom ${user.username}`,
        redirectUrl: "https://crown-db-50da8.web.app/",
      });
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  handleUserSignUp,
  handleUserLogIn,
};
