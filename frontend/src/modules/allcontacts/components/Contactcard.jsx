import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { apiclient } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';
import Updatecontact from '../../updatecontact/pages/Updatecontact';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Contactcard = (props) => {

    const DeleteContact = async () => {
        try {
            const res = await apiclient.delete('http://localhost:1234/removeContact/'+props.ID );
            console.log("Response = " , res);
        }
        catch(err ){
            console.log( err );
        }
    }

    const ChangeContact = () => {
        return(
        <>
        <Updatecontact/>  
        </>
        )
    }


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
        <Link to={`/updatecontact/${props.Name}`} >
        <Button onClick={ChangeContact} id={props.ID} variant="outlined" startIcon={<SettingsApplicationsSharpIcon/>} color="secondary">Update</Button>
        </Link>



        <Box gridColumn="span 5">
            <Item> ✅ {props.Desc}</Item>
        </Box>
        <Box gridColumn="span 5">
            <Item> 📩 {props.Email}</Item>
        </Box>


        {/* Delete Button  */}
        <Link to='/' >
        <Button onClick={DeleteContact} id={props.ID} startIcon={<DeleteIcon />} color='error' variant="outlined">Delete</Button>
        </Link>


        </Box>
    </Box>
    </>
)
}

export default Contactcard
