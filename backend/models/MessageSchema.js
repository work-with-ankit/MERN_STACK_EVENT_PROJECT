import mongoose from  "mongoose";
import validator from "validator";


 const messageSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name Required"],
        minLenght:[3, "Name must contain atleast 3  characted"],
    },
    email:{
        type: String,
        required:[true, " Email Required"],
        validate:[validator.isEmail,"please provide a valid email"],

    },
    subject:{
        type: String,
        required:[true, "Subject Required"],
        minLenght:[5, "subject must contain atleast 3  characted"],
    },
    message:{
        type: String,
        required:[true, "Message  Required"],
        minLenght:[10, "Message must contain atleast 3  characted"],
    },

 });


 export const Message= mongoose.model("Message", messageSchema);