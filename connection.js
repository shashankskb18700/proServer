const mongoose = require("mongoose");
function connection(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("connect to db"))
    .catch((e) => console.log(e));
}

module.exports = connection;
