const express = require('express');
const app = express()

app.get('/',(req,resp)=>{
    resp.send("This is home page")
})


app.get('/contact',(req,resp)=>{
    // resp.send("This is contact page")
    resp.send(`<input type="text" placeholder = "Enter Text">
        <button>Submit</button`)
})


app.get('/about',(req,resp)=>{
    resp.send("This is about us page")
})


app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})
