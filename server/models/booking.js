import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
    source: {type:String, required:true, trim:true},
    destination: {type:String, required:true, trim:true},
    date: {type:String, required:true, trim:true},
    time: {type:String, required:true, trim:true},    
});

const bookingModel = mongoose.model("booking", bookingSchema);
export default bookingModel;