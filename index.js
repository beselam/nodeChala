const express = require('express');
const app = express();
/*
app.get('/',(req,res)=>{
    console.log('accepting');
    res.send('hello chala am here');
    
}); */
app.use(express.static('public'));
app.listen(50000);