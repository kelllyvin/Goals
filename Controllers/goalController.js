const GOAL = require("../Models/goal");

// cretaing function dat controls d schema

const createGoal = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "provided title and description" });
  }
  try {
    const goal = await GOAL.create(req.body);

    return res.status(201).json({ sucess: true, goal });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};



const getAlllGoals = async (req, res) => {
  res.send("get all goals");
};

const getOngoingGoals = async (req, res) => {
  res.send("get ongoing goals");
};

const getCompletedGoals = async (req, res) => {
  res.send("get completed goals");
};

const getSinglegGoal = async (req, res) => {
  res.send("get single goal");
};

const updateGoal = async (req, res) => {
  res.send("update goal");
};
const deletegGoal = async (req, res) => {
  res.send("delete goal");
};
module.exports = {
  createGoal,
  getAlllGoals,
  getCompletedGoals,
  getOngoingGoals,
  getSinglegGoal,
  updateGoal,
  deletegGoal,
};
