import User from "../models/users.js";

const getAll = async (req, res) => {
  try {
    const ALL = await User.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOne = (req, res) => {};

const createOne = (req, res) => {};

const updateOne = (req, res) => {};

const deleteOne = (req, res) => {};

export { getAll, getOne, createOne, updateOne, deleteOne };
