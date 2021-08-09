const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const userData = await User.find();
    res.json({
      results: userData.length,
      userData,
    });
  } catch (err) {
    res.json({
      Status: "Failed",
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) {
      res.json({
        status: "Partial success",
        message: "ID  not found",
      });
    } else {
      res.json({ data });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.postUser = async (req, res) => {
  try {
    const userByName = await User.findOne({ username: req.body.username });
    const userByEmail = await User.findOne({ email: req.body.email });
    if (userByName || userByEmail) {
      return res.status(401).json({ message: "User Already Exits" });
    }
    await User.create(req.body);
    res.json({ message: "Success" });
  } catch (err) {
    res.json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("deleting");
    const data = await User.findById(req.params.id);
    if (!data) {
      res.json({
        status: "Partial success",
        message: "ID  not found",
      });
    } else {
      await User.findByIdAndDelete(req.params.id);
      res.json({ status: "Success", message: "User Deleted" });
    }
  } catch (err) {
    res.json({ status: "failed", message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) {
      res.json({
        status: "Partial success",
        message: "ID  not found",
      });
    } else {
      await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ status: "Success", message: "User Updated" });
    }
  } catch (err) {
    res.json({ status: "Fail", message: err.message });
  }
};
