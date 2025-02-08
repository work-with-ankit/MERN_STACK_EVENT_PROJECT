import app from "./app.js";





app.listen(process.env.PORT, ()=>{
     console.log(`server lestening at port ${process.env.PORT}`);
});