import { Container, TextField } from '@mui/material';
import React, { useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { apiclient } from '../../../shared/services/api-client';
import Findcontact from '../components/Findcontact';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    }));

const Readcontact = () => {
    const [contact, setContact] = useState(null);
    const nameRef = useRef();
    const emailRef = useRef();

    const FindContactCard = async () => {
        const contactInfo = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        };

    try {
        console.log("From Get Contact: ", contactInfo);
        const res = await apiclient.post("http://localhost:1234/getcontact", contactInfo);
        setContact(res.data.record);
        console.log("Res =", res.data.record);
    } catch (err) {
        console.error("Error:", err);
    }
    };

    

return (
    <Container>
        <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
            <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
            </Box>
            <Box gridColumn="span 6">
            <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
        </Box>
        </Box>
        </Box>

        <Box display="grid " gridTemplateColumns="repeat(12, 1fr)" gap={6} >
            <Box gridColumn="span 6" >
                <Button onClick={FindContactCard} startIcon={ < PlagiarismRoundedIcon />} color='success' variant="contained">
                    Find The Contact
                </Button>
            </Box>
            <Box gridColumn="span 6">
            <Link to='/' >
            <ColorButton  startIcon={ < CabinRoundedIcon />} variant="contained">Back To Home Screen</ColorButton>
            </Link>
            </Box>
        </Box>

        {contact ? (
        <Findcontact
        Name={contact.name}
        Desc={contact.desc}
        Email={contact.email}
        Mobile={contact.mobile}
        />
        ) : (
        <p>No Contact Found</p>
        )}
    </Container>
);
};

export default Readcontact;
