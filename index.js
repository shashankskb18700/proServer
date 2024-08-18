const express = require("express");
const UserRouter = require("./routes/user");
const connection = require("./connection");
const userMiddleware = require("./middleware/user");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.NODE_APP_API_COOKIE_KEY],
  })
);
app.use(cors());

connection(process.env.NODE_APP_API_DATABASE_URL);
UserRouter(app);

app.listen(5000);
