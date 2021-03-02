const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = expresS();

app.get('/', (req,res) =>{
        res.send({message: 'Hello World'});
})


app.listen(PORT,HOST);