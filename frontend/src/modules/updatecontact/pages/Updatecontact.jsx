import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import { apiclient } from '../../../shared/services/api-client';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    }));

const Updatecontact = () => {

    const [Message , setMessage ] = useState('');
    const  NameOfContact   = useParams();
    const nameRef = useRef();
    const emailRef = useRef();
    const decsRef = useRef();
    const mobileRef = useRef();


    

    const ChangeInContacts = async () => {  
        
        const ContactChangeInfo = {
            "name" : nameRef.current.value,
            "email" : emailRef.current.value,
            "desc" : decsRef.current.value,
            "mobile" : mobileRef.current.value 
        }
        console.log("ContactChangeInfo" , ContactChangeInfo)
    
    try{
        // finding the data 
        const res = await apiclient.post('http://localhost:1234/getcontact' ,  NameOfContact )
        console.log(" Update Res = "  , res );
        console.log("Simple id check in data = " , res.data.record._id );
        
        // updating the data 
        const ContactId = res.data.record._id;
        const res_of_Update = await apiclient.post(`http://localhost:1234/updatecontact/${ContactId}` , ContactChangeInfo);
        setMessage("Update Contact")
        console.log("res_of_Update" , res_of_Update);
    }
    catch(err){
        console.log(err)
    }

}

return (
    <>
    <p> {Message} </p>
    <div>
        
        <Container>

        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

                <Box gridColumn="span 3">
                <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
                </Box>

                <Box gridColumn="span 3">
                <TextField  inputRef={emailRef}   id="outlined-basic" label="Email" variant="outlined" />
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
        <Button onClick={ChangeInContacts}  startIcon={<ManageAccountsSharpIcon />} variant="contained">
            Update Contact
        </Button>
        </Box>

        <Box  gridColumn="span 3" >
        <Link to='/' >
        <ColorButton startIcon={<CabinRoundedIcon />} variant="contained">Back To Home Screen </ColorButton>
        </Link>
        </Box>
        </Box>


        </Container>
    </div>
    </>
)
}

export default Updatecontact
