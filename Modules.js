// OS module of Node Js

// const os = require('os');

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.type());
// const freeMemory = os.freemem()
// console.log(`${freeMemory/1024/1024/1024}`);


// File System Module(fs)

// const fs = require('fs')
// fs.writeFileSync("Notes.txt", "Hi My Name Is Susheel Prajapati") // Write the code
// fs.readFile("Notes.txt","utf-8",(err,data)=>{
//     if(!err)
//         console.log(data) // If we not give the utf-8 then it give the buffer data // Read rhe code
// })

// fs.appendFile("Notes.txt"," I Am From Ambedkar Nagar",(err)=>
// {
//     if(!err)
//         console.log('Data Updated')
// })

// fs.rename("Notes.txt","Note.txt",(err)=>
// {
//     if(!err)
//         console.log("txt File Updated")
// })

// fs.unlinkSync("Note.txt") //Unlink txt folder from root folder

// console.log(process.argv)
// console.log(process.argv[0])

// const fs = require('fs')
// const pathDir = process.argv
// if(pathDir[2] =="add")
// {
//     fs.writeFileSync(pathDir[3],pathDir[4]) // add demo.txt(folder name) "This is command line data()"
//  }

// else if(pathDir[2] == "remove") // remove demo.txt
// {
//     fs.unlinkSync(pathDir[3])
// }
// else{
//     console.log("Enter valid operation")
// }


//Path Module

const path = require('path');
