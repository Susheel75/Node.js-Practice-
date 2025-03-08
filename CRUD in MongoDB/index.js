const express = require('express');
const dbConnect = require('./config.js');
const mongodb = require('mongodb');


const app = express();

app.use(express.json());

app.get('/getdata', async(req,res)=>{
    let collection = await dbConnect();
    let response = await collection.find().toArray();
    res.send(response);
})

app.post('/postdata', async(req,res)=>{
    let collection = await dbConnect();
    let response = await collection.insertOne(req.body);
    if(response.acknowledged){
        res.send("Data inserted successfully");
    }
})

app.put('/updatedata/:name', async(req,res)=>{
    let collection = await dbConnect();
    let response = await collection.updateOne({name:req.params.name}, // condition
        {$set:req.body});
        if(response.acknowledged){
            res.send("Data updated successfully");
        }
})

app.delete('/deletedata/:id', async(req,res)=>{
    let collection = await dbConnect();
    let response = await collection.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    if(response.acknowledged){
        res.send("Data deleted successfully");
    }
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
