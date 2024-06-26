const express =require('express');
const path =require('path');

const app =express();

const port = 3000;

//using middleware static
app.use(express.static(path.join(__dirname, './provided/static')));

app.listen(port, ()=>{
    console.log(`Express server listening on port ${port}!`);
});