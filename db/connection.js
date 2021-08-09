const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://soban:msoban123@cluster0.ln9ys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to Db");
  }
);
module.exports = connection;
