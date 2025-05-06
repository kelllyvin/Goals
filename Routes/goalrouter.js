const router = require("express").Router();

const {
  createGoal,
  getAlllGoals,
  getCompletedGoals,
  getOngoingGoals,
  getSinglegGoal,
  updateGoal,
  deletegGoal,
} = require("../Controllers/goalController");

router.post("/", createGoal);
router.get("/", getAlllGoals);
router.get("/completed", getCompletedGoals);
router.get("/ongoing", getOngoingGoals);
router.get("/:goalid", getSinglegGoal);
router.patch("/:goalid", updateGoal);
router.delete("/:goalid", deletegGoal);

module.exports = router;
