import mongoose from 'mongoose';
const contactSchema = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    email: {type:String, required:true, trim:true},
    message: {type:String, required:true, trim:true},
});

const contactModel = mongoose.model("contact", contactSchema);
export default contactModel;