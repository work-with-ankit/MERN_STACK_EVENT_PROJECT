import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {dbName: "MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log("connect to dabase!")
    }).catch(err=>{
        console.log("Some error while occured",err);
    })
};