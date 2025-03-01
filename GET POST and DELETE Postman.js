const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World, This is our home page')

});

app.get('/about',(req,res)=>{
    res.send('<h1>Hello World, This is our about page</h1>')

});


app.post('/login',(req,res)=>{
    res.send("Login Successfully")
})

app.delete('/delete',(req,res)=>{
    res.send("Data Deleted Successfully")
})

// app.get('/contact',(req,res)=>{
//     res.send('<h1>Hello World, This is our contact page</h1>')

// });

// app.get('/services',(req,res)=>{
//     res.send('<ul><li>Web Design</li><li>Logo Design</li><li>Video Creation</li></ul>')

// });

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
