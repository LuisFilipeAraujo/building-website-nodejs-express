const express = require('express');

//routrer object (I can now replace the app.get for router.get)
const router = express.Router();

router.get('/', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/index.html'));

});

app.get('/speakers', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/speakers.html'));

});