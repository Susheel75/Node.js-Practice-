const express = require('express');
const fs = require('fs')
const app = express();

app.get('/fetch',(req,res)=>{
    const rstream = fs.createReadStream("input.txt")
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata)
    })
    rstream.on('end',()=>{
        res.end()
    })

    rstream.on("error",(err)=>{
        console.log(err)
        res.end("No File Found")
    })
})
app.listen(8000,()=>
{
    console.log("Server Connected with port 8000..............")
})
