const express =require('express');
const path =require('path');

const app =express();

const port = 3000;

app.get('/', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/index.html'));

});

app.get('/speakers', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/speakers.html'));

});

app.listen(port, ()=>{
    console.log(`Express server listening on port ${port}!`);
});