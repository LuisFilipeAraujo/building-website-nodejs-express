
app.get('/', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/index.html'));

});

app.get('/speakers', (req, res)=>{
    //res.send('hello express :)');
    res.sendFile(path.join(__dirname, './provided/static/speakers.html'));

});