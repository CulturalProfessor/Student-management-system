import Student from "../models/studentSchema.js";

export const getStudents = async (req, res) => {
  const data = req.body;
  const find = await Student.findOne({ firstName: "Vinayak" });
  res.status(200).json(find);
};

export const postStudents = async (req, res) => {
  const data = req.body;
  const newStudent=await Student.insertMany(data)
  const find=await Student.findOne({firstName:"Vinayak"})
  res.status(200).json({
    "message":"Student added successfully"
  });
};
