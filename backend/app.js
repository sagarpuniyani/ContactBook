import express from "express";
import { contactdetailsRoutes } from "./routes/contactdetail.js";
import cors from 'cors';

const app = express();

app.use(cors());


// To take input from the Url Request 
app.use(express.json());

// To get the mutiple parameters

// calling the Contact details route 
app.use('/' , contactdetailsRoutes);

// Last Middle Ware (404)
app.use((_ , res , _ ) =>{
    res.status(404).json({message : '404 not found '})
})

// startup the server 
const server = app.listen(1234, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})