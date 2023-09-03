import { Container , TextField } from '@mui/material'
import React from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import { apiclient } from '../../../shared/services/api-client';

const Readcontact =  () => {

    const nameRef = useRef();
    const emailRef = useRef();

    const FindContact = async () => {
        const contactInfo = {
        name: nameRef.current.value,
        email: emailRef.current.value
        };
    
        try {
        console.log("From Get Contact : " , contactInfo);
        const res = await apiclient.getOne("http://localhost:1234/getcontact", contactInfo);
        console.log("Res =", res);
        
        } catch (err) {
        console.error("Error:", err);

        }
    };



return (
    <>
        <Container >
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

                <Box gridColumn="span 3">
                <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
                </Box>

                <Box gridColumn="span 3">
                <TextField inputRef={emailRef}  id="outlined-basic" label="Email" variant="outlined" />
                </Box>

            </Box>
        </Box>

        <Button onClick={FindContact} variant="contained">Find The Contact</Button>
        </Container>
    </>
)
}

export default Readcontact
