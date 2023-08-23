import {   Button } from '@mui/material'
import React from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import { apiclient } from '../../../shared/services/api-client';
import { useState } from 'react';


const Updatecontact =  () => {

    // const [Message , setMessage ] = useState('');
    // making the reference of the old data of the text field 
    const oldnameRef = useRef();
    const oldemailRef = useRef();
    const olddecsRef = useRef();
    const oldmobileRef = useRef();

console.log('Hello I am update')
    const oldcontactInfo = {
        "name" : oldnameRef.current.value,
        "email" : oldemailRef.current.value,
        "desc" : olddecsRef.current.value,
        "mobile" : oldmobileRef.current.value
    }
        console.log("name  = " , oldcontactInfo.name)


    const getId = async()=>{
        try {
            const res = await apiclient.get("http://localhost:1234/getcontact" , oldcontactInfo );
            console.log('resssss',res);
            const contactId =  res.data.record._id;
            // setMessage("Id recevied ");
            console.log("Contact Id = " , contactId);
        }
        catch(err){
            console.log("Error in update is " , err );
        }
    }

return (
    <>
        <container>
        {/* <p> {Message} </p> */}
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

                <Box gridColumn="span 3">
                    <input type="text" ref={oldnameRef} placeholder='Type name' />
                {/* <TextField inputRef = {oldnameRef} id="outlined-basic" label="Old Name" variant="outlined" /> */}
                </Box>

                <Box gridColumn="span 3">
                <input type="text" ref={oldemailRef} placeholder=' old Email' />
                {/* <TextField inputRef = {oldemailRef} id="outlined-basic" label="Old Email" variant="outlined" /> */}
                </Box>

                <Box gridColumn="span 3">
                <input type="text" ref={oldmobileRef} placeholder='old mobile' />
                {/* <TextField inputRef = {oldmobileRef} id="outlined-basic" label="Old Mobile" variant="outlined" /> */}
                </Box>

                <Box gridColumn="span 3">
                <input type="text" ref={olddecsRef} placeholder='Old Desc ' />
                {/* <TextField inputRef = {olddecsRef} id="outlined-basic" label="Old Description" variant="outlined" /> */}
                </Box>

            </Box>
        </Box>
        <Button onClick={()=>{getId()}}  variant="contained">Update Contact</Button>
        </container>
    </>
)
}

export default Updatecontact
