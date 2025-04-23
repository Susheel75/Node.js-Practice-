const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World, This is our home page')

});

app.get('/about-us',(req,res)=>{
    res.status(200).json([{
        
            "id": "1",
            "name": "Susheel",
            "age": 20,
            "marks": 90,
            "Subject": "React",
            "email": "psusheel33@gmail.com"
          },
          {
            "id": "2",
            "name": "Rahul",
            "age": 21,
            "marks": 85,
            "Subject": "Angular",
            "email": "rahul64@gmail.com"
          },
          {
            "id": "3",
            "name": "Rohan",
            "age": 22,
            "marks": 95,
            "Subject": "Vue",
            "email": "rohan232@gmail.com"
          },
          {
            "id": "4",
            "name": "Simran",
            "age": 23,
            "marks": 80,
            "Subject": "Math",
            "email": "simran242@gmail.com"
          },
          {
            "id": "5",
            "name": "Priya",
            "age": 24,
            "marks": 92,
            "Subject": "Node",
            "email": "priya4343@gmail.com"
          
    }])   
})

app.get('/status',(req,res)=>{
    res.status(500).json({error:"Something Went Wrong"})
})


app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})
