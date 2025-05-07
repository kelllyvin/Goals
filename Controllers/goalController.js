const GOAL = require("../Models/goal");

// cretaing function dat controls d schema

const createGoal = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "provided title and description" });
  }
  try {
    const goal = await GOAL.create(req.body);

    return res.status(201).json({ success: true, goal });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

// find() dis allow us to get all data for our goal

const getAlllGoals = async (req, res) => {
  const goals = await GOAL.find().sort('-createdAt')
  res.status(200).json({success: true, num: goals.length, goals })
};
// find(pro)
const getOngoingGoals = async (req, res) => {
  const goals = await GOAL.find({progress: { $lt: 100}}).sort("-createdAt");
  res.status(200).json({ success: true, num: goals.length, goals });
};

const getCompletedGoals = async (req, res) => {
  const goals = await GOAL.find({ progress: { $eq: 100 } }).sort("-createdAt");
  res.status(200).json({ success: true, num: goals.length, goals });
};
// we use req.params to gey a single goal 
// we get d id by pasin dis prompt findbyid
const getSinglegGoal = async (req, res) => {
  const {goalid} = req.params
   const goal = await GOAL.findById(goalid)
   res.status(200).json({ success: true, goal })
};
// by update it means a data is execting already 
// d metod we use is findbyidAndupdate,
// d id of wat u want to change to, d iteam u want to chng and u now validate wat u have chng
// dis update takes in 3 params (,id,req.body and also {new:true, runvalidators: true} )
const updateGoal = async (req, res) => {
 const { goalid } = req.params;

  try {
     const goal = await GOAL.findByIdAndUpdate(goalid, req.body, {runValidators: true, new: true})
     return res.status(200).json({success: true, goal})
  } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
  }
};
// in delete we findbyid and delete 
const deletegGoal = async (req, res) => {
   const { goalid } = req.params;
   await GOAL.findByIdAndDelete(goalid)
   res.status(200).json({success: true, message:"Goal Deleted"})

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
