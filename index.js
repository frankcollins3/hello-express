const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // res.send('Hello, SEI World!');
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index', { myVar: 'ooweee' })
    res.status(200);
});

app.get('/about', function(req, res) {
    // res.send('This is the about page.')
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about')
    res.status(200);
});


app.get('/blog/:date', (req, res) => {
    // res.send('welcome to my blog.')
    // res.sendFile(__dirname + '/views/blog.html');
    const theDateTheyWant = req.params.date
    res.render('/blog', { date: theDateTheyWant })
    res.status(200);
});

// app.listen(2000);    //(or below, but not both)

app.listen(2000, () => {
    console.log('Server Started!');
});
