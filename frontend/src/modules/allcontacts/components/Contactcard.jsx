import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Contactcard = (props) => {
return (
    <>
    <p>Details are 🙎🏿</p>
    <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 5">
            <Item> 😁 {props.Name} </Item>
        </Box>
        <Box gridColumn="span 5">
            <Item> 📳 {props.Mobile}</Item>
        </Box>

        {/* Update Button  */}
        <Link to='/updatecontact' >
        <Button id={props.ID} variant="outlined" color="secondary">Update</Button>
        </Link>


        <Box gridColumn="span 5">
            <Item> ✅ {props.Desc}</Item>
        </Box>
        <Box gridColumn="span 5">
            <Item> 📩 {props.Email}</Item>
        </Box>


        {/* Delete Button  */}
        <Link to='/removecontact' >
        <Button  id={props.ID} color='error' variant="outlined">Delete</Button>
        </Link>


        </Box>
    </Box>
    </>
)
}

export default Contactcard
