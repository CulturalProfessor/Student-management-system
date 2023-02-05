import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    // name: '',
    // username: '',
    // email: '',
    // phone: ''
    firstName: '',
    middleName: '',
    lastName: '',
    clas:'',
    division: '',
    rollNumber:'',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: '',
    pincode: '',
    studentsProfilePicture:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstName,
    middleName,
    lastName,
    clas,
    division,
    rollNumber,
    addressLine1,
    addressLine2,
    landmark,
    city,
    pincode,
    studentsProfilePicture } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="my-input" />
            </FormControl>
             <FormControl>
                <InputLabel htmlFor="my-input">MiddleName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='middleName' value={middleName} id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">Class</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='class' value={clas} id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">Division</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='division' value={division} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Rollnumber</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='rollnumber' value={rollNumber} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address Line 1</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={addressLine1} id="my-input"/>
            </FormControl>
                        <FormControl>
                <InputLabel htmlFor="my-input">Address Line 2</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={addressLine2} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Landmark</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark' value={landmark} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark' value={city} id="my-input" />
            </FormControl><FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark' value={pincode} id="my-input" />
            </FormControl><FormControl>
                <InputLabel htmlFor="my-input">ProfilePicture</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark' value={studentsProfilePicture} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;