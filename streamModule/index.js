const fs = require('fs')
const http = require('http')
const server = http.createServer();

// server.on("request",(req,resp)=>
// {
//     fs.readFile("input.txt",(err,data)=>
//     {
//         if(err)
//             return console.log(err)
//         resp.end(data.toString())
//     })
// })

server.on('request',(req,resp)=>{
    // create readable stream
    const rstream = fs.createReadStream("input.txt")
    rstream.pipe(resp)
    // rstream.on("data",(chunkdata)=>{
    //     resp.write(chunkdata)
    // })

    // rstream.on('end',()=>{
    //     resp.end()
    // })

    // rstream.on("error",(err)=>{
    //     console.log(err)
    //     resp.end("No File Found")
    // })
})
server.listen(8000,()=>
{
    console.log("Server Connected with port 8000..............")
})
