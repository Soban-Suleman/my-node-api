const express = require("express");
//Database
require("./db/connection");

//Importing middlewares
const bodyParser = require("body-parser");
const morgan = require("morgan");
//User routes
const userRoutes = require("./routes/userRoutes");

//APP
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/", (req, res, next) => {
  res.send("Backend Running");
});
app.use(require("cors"));
//SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
