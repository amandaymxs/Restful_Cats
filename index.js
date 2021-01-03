const express = require('express');
const app = express();
const data = require('./data.json');

const port = 4000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.set('view engine', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Create
app.get('/posts/new', (req, res) => {
    res.render('posts/new');
})

//Read
app.get('/posts', (req, res) => {
    res.render('posts/index', { ...data });
})


app.listen(port, (req, res) => {
    console.log("Listening on port 4000.");
})