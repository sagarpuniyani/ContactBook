import { Container, TextField } from '@mui/material'
import React from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { apiclient } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import CreateIcon from '@mui/icons-material/Create';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    }));


const Createcontact = () => {
    const [Message , setMessage ] = useState('');
    // making the reference of the data of the text field 
    const nameRef = useRef();
    const emailRef = useRef();
    const decsRef = useRef();
    const mobileRef = useRef();

    // creating the schema of the ContactModel

    const AddContact = async () => {

    const contactInfo = {
        "name" : nameRef.current.value,
        "email" : emailRef.current.value,
        "desc" : decsRef.current.value,
        "mobile" : mobileRef.current.value
    }

    try{
        const res = await apiclient.post("http://localhost:1234/addcontact" , contactInfo);
        console.log("Response = " , res);
        setMessage(res.data.message);
        console.log("res info " , res);
    }
    catch(err){
        setMessage("Not yet Added ");
        console.log("Create Contact Error ", err);
    }
}


return (
    <div>
        <p> {Message} </p>
        <Container>

        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

                <Box gridColumn="span 3">
                <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
                </Box>

                <Box gridColumn="span 3">
                <TextField inputRef={emailRef}  id="outlined-basic" label="Email" variant="outlined" />
                </Box>

                <Box gridColumn="span 3">
                <TextField inputRef={mobileRef} id="outlined-basic" label="Mobile" variant="outlined" />
                </Box>

                <Box gridColumn="span 3">
                <TextField inputRef={decsRef} id="outlined-basic" label="Description" variant="outlined" />
                </Box>

            </Box>
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
            <Box gridColumn="span 9" >
                <Button onClick={AddContact} startIcon={<CreateIcon />} variant="contained">Add To Contact</Button>
            </Box>
            <Box gridColumn="span 3">
            <Link to='/' >
            <ColorButton startIcon={< CabinRoundedIcon/>}  variant="contained">Back To Home Screen</ColorButton>
            </Link>
            </Box>
        </Box>
        </Container>
    </div>
)
}

export default Createcontact
