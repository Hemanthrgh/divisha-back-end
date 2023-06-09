const express=require('express');
const app=express();
const port=8000;
const ejs=require('ejs');


app.set('view engine', 'ejs');
// app.set('views','views');

app.use("/",require('./routes/index.js'))

app.listen(port,(err)=>{
    console.log(`app start listening on port: ${port}`);
})