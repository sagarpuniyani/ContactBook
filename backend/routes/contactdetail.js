import express from "express";
import { contactcontroller } from "../controller/contact-controller.js";

export const contactdetailsRoutes = express.Router();

// Crud operations 

// 1. create 
contactdetailsRoutes.post('/addcontact'  , contactcontroller.addcontact);


// 2. read 
contactdetailsRoutes.post('/getcontact' , contactcontroller.readcontact);

// 3. read 
contactdetailsRoutes.get('/getallcontact' , contactcontroller.readallcontacts);

//4. update 
contactdetailsRoutes.post('/updatecontact/:contactid' , contactcontroller.updatecontact)

//5. delete 
contactdetailsRoutes.delete('/removeContact/:contactid' , contactcontroller.removecontact)