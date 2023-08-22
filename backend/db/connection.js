import mongoose from 'mongoose';

const URL = "mongodb+srv://sagarpuniyani:Sagar1234@mycluster.blpoies.mongodb.net/contactdb?retryWrites=true&w=majority";
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connection Done...');
}).catch(err=>{
    console.log('Error in DB Connection ', err);
})
export default mongoose;
