const MentorModel = require("../models/mentorModel");

const getMentorById = async (req, res) => {
  try {
    const findMentor = await MentorModel.findById(req.params.id);
    res.status(200).json(findMentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.menssage });
  }
};

const getAllMentors = async (req, res) => {
  try {
    const allMentores = await MentorModel.find();
    res.status(200).json(allMentores);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getMultipleFilter = async (req, res) => {
  try {
    const findParameter = await MentorModel.find(req.query);

    if (findParameter.length === 0) {
      return res.status(404).json({
        message: `Search not found!`,
        warning: `The parameters for this type of research must be identical to those registered in the database.`,
      });
    } 
    
    if(findParameter){
      res.status(200).json({
        message: "Search found: ",
        findParameter,
      });
    }
  } catch (error) {
    res.status(500).json({
      menssage: error.message,
    });
  }
};

const createNewMentor = async (req, res) => {
  try {
    const { mentorName, expertise, available, linkedin } = req.body;
    const newMentor = new mentorModel({
      mentorName,
      expertise,
      available,
      linkedin,
    });

    const savedMentor = await newMentor.save();

    res
      .status(201)
      .json({ message: "New mentor successfully added", savedMentor });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const updateMentor = async (req, res) => {
  try {
    const findMentor = await MentorModel.findById(req.params.id);

    if (findMentor) {
      findMentor.mentorName = req.body.mentorName || findMentor.mentorName;
      findMentor.expertise = req.body.expertise || findMentor.expertise;
      findMentor.available = req.body.available || findMentor.available;
      findMentor.linkedin = req.body.linkedin || findMentor.linkedin;
    } else {
      res.status(404).json({
        message: `Mentor not found!`,
      });
    }

    const savedMentor = await findMentor.save();
    res.status(200).json({
      message: `Mentor successfully updated!`,
      findMentor,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const deleteMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMentor = await MentorModel.findByIdAndDelete(id);

    if (!deleteMentor) {
      res.status(404).json({ message: `Mentor not found` });
    }

    const message = `Mentor ${deleteMentor.mentorName} was successfully daleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMentors,
  getMentorById,
  getMultipleFilter,
  createNewMentor,
  updateMentor,
  deleteMentor,
};
