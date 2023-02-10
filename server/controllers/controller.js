import Userdb from "../models/studentSchema.js";
import url from "url";

// create and save new user
export const create = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new user
  const user = new Userdb({
    _id: req.body.id,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    class: req.body.class,
    division: req.body.division,
    rollNumber: req.body.rollNumber,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    landmark: req.body.landmark,
    city: req.body.city,
    pincode: req.body.pincode,
    studentsProfilePicture: req.body.studentsProfilePicture,
  });
  console.log(req.body);
  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
      // res.status(200).json({
      //   message:"user added"
      // })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all users/ retrive and return a single user
export const find = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// Update a new idetified user by user id
export const update = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.query.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
export const Delete = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.query.id;
  console.log(id)
  Userdb.findOneAndDelete({_id: id })
    .then((data) => {
      console.log(data);
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
