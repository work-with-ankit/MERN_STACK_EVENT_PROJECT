import express from "express";
import { dbConnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/MessageRouter.js";
import cors from "cors";

const app = express();


dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials:true,
   })

);

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/".function(req, res){
    res.send("successfully");
})

app.use("/api/v1/message", messageRouter)



dbConnection();

export default app;
