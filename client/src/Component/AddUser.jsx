import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  id: "",
  firstName: "",
  middleName: "",
  lastName: "",
  class: "",
  division: "",
  rollNumber: "",
  addressLine1: "",
  addressLine2: "",
  landmark: "",
  city: "",
  pincode: "",
  studentsProfilePicture: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
  // const regex = {
  //   class: "([1-9]|1[0-2])",
  //   division: "([A-E])",
  //   rollNumber: "([1-9][0-9])",
  //   pincode: "([1-9][0-9][1-9][0-9][1-9][0-9])",
  // };
  const [user, setUser] = useState(initialValue);
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage,setErrorMessage]=useState('')

  const onValueChange = (e) => {
    // if (e.target.name == ("class" || "division" || "rollNumber" || "pincode")) {
    //   if (regex.e.target.name.test(e.target.value)) {
    //     setError(false);
    //   } else {
    //     setError(true);
    //   }
    // }
    
    setUser({ ...user, [e.target.name]: e.target.value });
    let id = Math.ceil(Math.random().toPrecision(7)*10000000);
  
    setUser({ ...user, id: id });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    console.log(user);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="firstName"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">MiddleName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="middleName"
          id="my-input"
        />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">LastName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lastName"
          id="my-input"
        />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">Class only 1-12</InputLabel>
        <Input
          onChange={(e) =>
            onValueChange(e)
          }
          name="class"
          id="my-input"
          helperText={
            error ? setErrorMessage("Classes should be only from 1 to 12") : ""
          }
        />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">Division only A-E</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="division"
          id="my-input"
          helperText={
            error ? setErrorMessage("Division should be only from A to E") : ""
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Roll Number only two digits</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="rollNumber"
          id="my-input"
          helperText={
            error
              ? setErrorMessage("RollNumber should be only two digits")
              : ""
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address Line 1</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="addressLine1"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address Line 2</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="addressLine2"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Landmark</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="landmark"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="city" id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Pincode only six digit</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pincode"
          id="my-input"
          helperText={
            error
              ? setErrorMessage("RollNumber should be only six digits")
              : ""
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">ProfilePicture</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="studentsProfilePicture"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => addUserDetails(e)}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
