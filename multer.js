//Use Multer to upload file through postman

const express=require('express');
const multer = require('multer');

const app = express();

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){ //cb is callback
            cb(null,'uploads');
        },
        filename:function(req,file,cb){ //cb is callback
            cb(null,file.originalname+'-'+Date.now()+'.jpg');
        }
    })
}).array('user_file')
//.single('user_file') is used to upload single file
//.array('user_file') is used to upload multiple files
app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.post('/upload',upload,(req,res)=>{
    res.send('File Uploaded Successfully.....')
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})

