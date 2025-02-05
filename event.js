const express = require('express')
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter()
let count = 0;
event.on('counter',()=>{
    count++;
    console.log("Count API= ",+count);
})
app.get('/',(req,res)=>
{
    event.emit('counter')
    res.send("API Hit at home page")
})

app.get('/user',(req,res)=>
    {
        res.send("API Hit at user page")
    })
app.listen(4000,()=>{
    console.log("Server is listen on port no 4000")
    })
