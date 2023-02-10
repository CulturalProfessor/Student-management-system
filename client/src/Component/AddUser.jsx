import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    id:"",
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
    const { id,firstName,
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
        
        console.log(user);
    }
    
    const addUserDetails = async() => {
        let id = Math.random().toPrecision(7) * 10000000;
        setUser({ ...user, id: id });
        await addUser(user);
        console.log(user);
        // navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName'  id="my-input" />
            </FormControl>
             <FormControl>
                <InputLabel htmlFor="my-input">MiddleName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='middleName'  id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName'  id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">Class</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='class'  id="my-input" />
            </FormControl> <FormControl>
                <InputLabel htmlFor="my-input">Division</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='division' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Rollnumber</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='rollnumber'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address Line 1</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address'  id="my-input"/>
            </FormControl>
                        <FormControl>
                <InputLabel htmlFor="my-input">Address Line 2</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address'  id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Landmark</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark'  id="my-input" />
            </FormControl><FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark'  id="my-input" />
            </FormControl><FormControl>
                <InputLabel htmlFor="my-input">ProfilePicture</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='landmark' id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={(e) => addUserDetails(e)}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;