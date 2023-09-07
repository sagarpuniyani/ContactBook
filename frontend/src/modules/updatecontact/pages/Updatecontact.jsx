import React from 'react';
import { Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef } from 'react';

const Updatecontact = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const decsRef = useRef();
    const mobileRef = useRef();
return (
    <>
    Update The Contact 
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

        </Container>
    </div>
    </>
)
}

export default Updatecontact
