import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  _id: { type: Number, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  class: { type: String, required: true },
  division: { type: String, required: true },
  rollNumber: { type: Number, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  landmark: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: Number, required: true },
  studentsProfilePicture: { type: String },
});

const Student=mongoose.model("Student",studentSchema);
export default Student;