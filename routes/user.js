const { handleUserSignUp, handleUserLogIn } = require("../controllers/user");
const restrictToLoggedInUser = require("../middleware/user");

const UserRouter = (app) => {
  // app.use("/login", restrictToLoggedInUser);
  app.post("/signup", handleUserSignUp);
  app.post("/login", handleUserLogIn);

  app.get("/logout", (req, res) => {
    res.cookie("uid", "", { maxAge: 1 });
    return res.status(200).json({
      success: true,
      message: `Successfully logged out`,
      redirectUrl: "https://crown-db-50da8.web.app/auth",
    });
  });
};

module.exports = UserRouter;
