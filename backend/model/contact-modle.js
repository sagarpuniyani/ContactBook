import mongoose from "../db/connection.js";
import { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    "name":{type:SchemaTypes.String, required:true, unique:true , index : true},
    "email":{type:SchemaTypes.String, required:true , unique:true , index : true },
    "mobile":{type:SchemaTypes.String, required:true  },
    "desc":{type:SchemaTypes.String }
});
export const contactModel = mongoose.model('contacts',ContactSchema);
