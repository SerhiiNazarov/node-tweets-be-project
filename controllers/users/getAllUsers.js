const { User } = require("../../models/users");

const { ctrlWrapper } = require("../../helpers");

const getAllUsers = async (req, res, next) => {
  const result = await User.find();
  res.json(result);
};

module.exports = {
  getAllUsers: ctrlWrapper(getAllUsers),
};
