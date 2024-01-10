import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({path : './.env'})

const URL = process.env.MONGODB_URL;
const promise = mongoose.connect(`${URL}`);
promise.then(data=>{
    console.log('DB Connection Done...' );
}).catch(err=>{
    console.log('Error in DB Connection ', err.message);
})
export default mongoose;
