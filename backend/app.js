import express from "express";
import { contactdetailsRoutes } from "./routes/contactdetail.js";

const app = express();
// To take input from the Url Request 
app.use(express.json());

// To get the mutiple parameters

// calling the Contacy details route 
app.use('/' , contactdetailsRoutes);

// Last Middle Ware (404)
app.use((req , res , next ) =>{
    res.json({message : '404 not found '})
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