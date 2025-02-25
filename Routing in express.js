const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World, This is our home page')

});

app.get('/about-us',(req,res)=>{
    res.send('<h1>Hello World, This is our about page</h1>')
});

app.get('/ab*cd',(req,res)=>{
    res.send('<h1>Hello World, This is our regex page</h1>')
})

app.post('/user/:id',(req,res)=>{
    res.send(req.params)
})

app.get('/user/:id/status/:status_id',(req,res)=>{
    res.send(req.params)
})


app.get('/flights/:from-:to-:by',(req,res)=>{
    res.send(req.params)
})
app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})