const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require("mongoose")
app.use(express.json())

app.post("/signup", async (req,res)=>{
    const {username, email, password} = req.body;
    if (username != ""){ 
        if (email != ""){
            if (password.length > 8 && password.length < 16){
                res.send("User Added")
            } else {
                console.error("Password length should be greater than 8 or less than or equal to 16")
            }
        } else { 
            console.error("Email cannot be empty")
        }
    } else{
    console.error("Username cannot be empty")
}
})


app.get("/", (req,res)=>{
    res.send("Root is working!")
})

app.listen(PORT, ()=>{
    console.log("Server is running")
})