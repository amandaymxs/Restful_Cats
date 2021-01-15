const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');


const port = 4000;
const path = require('path');
const { type } = require('jquery');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    //parsed any data coming in from a form

app.set('view engine', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Create
app.get('/posts/new', (req, res) => {
    res.render('posts/new');
})

//Read
app.get('/posts', (req, res) => {

    res.render('posts/index', { data });
})

app.post('/posts', (req, res) => {
    // const { name, age, color, breed, gender, backstory, source, sourceType, adoptionFee, feeIncludes } = req.body;
    // posts.unshift({ name, age, color, breed, gender, backstory, source, sourceType, adoptionFee, feeIncludes });
    const { name, age, color, breed, gender, backStory, source, sourcetype, adoptionFee, feeIncludesItem } = req.body;
    fs.readFileSync('data.json', function (err, data) {
        if (err) {
            console.log("File read failed:", err);
            return;
        } else {
            let json = JSON.parse(data);
            json.push({ name, age, color, breed, gender, backStory, source, sourcetype, adoptionFee, feeIncludesItem });
            fs.writeFile('data.json', JSON.stringify(json));
        }
    })
    res.render('posts/', { data });
})


app.listen(port, (req, res) => {
    console.log("Listening on port 4000.");
})