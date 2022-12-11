const mentorController = require("../controllers/mentorController");
const express = require("express");

const router = express.Router();

router.post("/create", mentorController.createNewMentor);
router.get("/", mentorController.getAllMentors);
router.get("/filter", mentorController.getMultipleFilter);
router.get("/:id", mentorController.getMentorById);
router.put("/:id", mentorController.updateMentor);
router.delete("/:id", mentorController.deleteMentor);

module.exports = router;
