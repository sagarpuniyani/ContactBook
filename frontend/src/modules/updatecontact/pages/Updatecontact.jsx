import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import { apiclient } from '../../../shared/services/api-client';
import { useParams } from 'react-router-dom';

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

        <Button onClick={ChangeInContacts} variant="contained">
            Find The Contact
        </Button>
        </Container>
    </div>
    </>
)
}

export default Updatecontact
