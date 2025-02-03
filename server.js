const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require("mongoose")
app.use(express.json())

app.post("/signup", async (req,res)=>{
    const {username, email, password} = req.body;
    if (username != ""){ 
        if (email != ""){
            if (password.length() > 8 && password.length() < 16){
                res.send("User Added")
            } else {
                console.error("Password expectations failed")
            }
        } else { 
            console.error("Email is required")
        }
    } else{
    console.error("Username is required")
}
})


app.get("/", (req,res)=>{
    res.send("Root is working!")
})

app.listen(PORT, ()=>{
    console.log("Server is running")
})