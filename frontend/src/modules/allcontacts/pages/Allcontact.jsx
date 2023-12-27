import React, { useEffect, useState } from 'react'
import Contactcard from '../components/Contactcard'
import { apiclient } from '../../../shared/services/api-client'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import CreateIcon from '@mui/icons-material/Create';
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    }));

const Allcontacts = () => {

    const [contact , setcontact ] = useState([]);

    const getallcontact = async () => {
        const res = await apiclient.get("http://localhost:1234/getallcontact" );
        setcontact( contact => contact = res.data.records);
        console.log("Response is  =  " , res);
        console.log("Response.name  is  =  " , res.data.records.name);
    }
    
    useEffect(() => {
        getallcontact();
    } , []);

return (
    
    <>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ width: 1 }}>
    <Box gridColumn="span 6">

    <h3>All contacts are listed </h3>
    </Box>
    <Box gridColumn="span 3">

    <Link to='/getcontact' >
    <Button startIcon={ <PlagiarismRoundedIcon />} variant="contained" color="success">
        Find One Contact
        </Button>
    </Link>
    </Box>
    <Box gridColumn="span 3">

    <Link to='/createcontact' >
    <ColorButton startIcon={ <CreateIcon />} variant="contained">Craete New Contact</ColorButton>
    </Link>
    </Box>
    </Box>

    {contact.length === 0 && <p>No Contacts </p>}
        {contact.length>0 && contact.map(eachcontact =>{
            return ( <Contactcard
                Name={eachcontact.name}
                Desc={eachcontact.desc}
                Email={eachcontact.email}
                Mobile={eachcontact.mobile}
                ID={eachcontact._id}
            />)
        })}
    {/* <Contactcard Name={contact.name}  /> */}
    </>
)
}

export default Allcontacts
