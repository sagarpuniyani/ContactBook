import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// This component will print the Contact Card 

const Findcontact = (props) => {
return (
    <>
    <p>Details are 🙎🏿</p>
    <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
            <Item> 😁 {props.Name} </Item>
        </Box>
        <Box gridColumn="span 6">
            <Item> 📳 {props.Mobile}</Item>
        </Box>
        <Box gridColumn="span 6">
            <Item> ✅ {props.Desc}</Item>
        </Box>
        <Box gridColumn="span 6">
            <Item> 📩 {props.Email}</Item>
        </Box>
        </Box>
    </Box>
        
    </>
)
}

export default Findcontact
