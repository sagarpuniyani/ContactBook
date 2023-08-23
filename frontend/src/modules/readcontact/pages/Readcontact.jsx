import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Findcontact from '../components/Findcontact';


const Readcontact = async () => {
    
    return (
    <>

        <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 3">
        <TextField  label="Name" variant="outlined" />
        </Box>
        <Box gridColumn="span 3">
        <TextField   label="Email" variant="outlined" />
        </Box>
        </Box>
    </Box>

        <Findcontact />

    </>
)
}

export default Readcontact
