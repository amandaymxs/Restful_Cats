const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const { v4: uuid } = require('uuid');

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
    // const { name, age, color, breed, gender, backstory, source, sourceType, adoptionFee, feeIncludes, img} = req.body;
    // posts.unshift({ name, age, color, breed, gender, backstory, source, sourceType, adoptionFee, feeIncludes });
    const { img, name, age, color, breed, gender, backStory, source, sourceType, adoptionFee, feeIncludes } = req.body;
    data.unshift({ img, name, age, color, breed, gender, backStory, source, sourceType, adoptionFee, feeIncludes, id: uuid() });
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (error) {
        if (error) throw error;
        console.log('Saved!');
    })
    res.render('posts/', { data });
})

//Show
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = data.find(p => p.id == id);
    res.render('posts/show', { post });
})

//Edit
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = data.find(p => p.id == id);
    res.render('posts/edit', { post });
})

//Update
app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    const newImg = req.body.img;
    const newName = req.body.name;
    const newAge = req.body.age;
    const newColor = req.body.color;
    const newBreed = req.body.breed;
    const newGender = req.body.gender;
    const newBackStory = req.body.backStory;
    const newSource = req.body.source;
    const newSourceType = req.body.sourceType;
    const newAdoptionFee = req.body.adoptionFee;
    const newFeeIncludes = req.body.feeIncludes;
    const foundImg = data.find(p => p.id == id);
    const foundName = data.find(p => p.id == id);
    const foundAge = data.find(p => p.id == id);
    const foundColor = data.find(p => p.id == id);
    const foundBreed = data.find(p => p.id == id);
    const foundGender = data.find(p => p.id == id);
    const foundBackStory = data.find(p => p.id == id);
    const foundSource = data.find(p => p.id == id);
    const foundSourceType = data.find(p => p.id == id);
    const foundAdoptionFee = data.find(p => p.id == id);
    const foundFeeIncludes = data.find(p => p.id == id);
    foundImg.img = newImg;
    foundName.name = newName;
    foundAge.age = newAge;
    foundColor.color = newColor;
    foundBreed.breed = newBreed;
    foundGender.gender = newGender;
    foundBackStory.backStory = newBackStory;
    foundSource.source = newSource;
    foundSourceType.sourceType = newSourceType;
    foundAdoptionFee.adoptionFee = newAdoptionFee;
    foundFeeIncludes.feeIncludes = newFeeIncludes;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (error) {
        if (error) throw error;
        console.log('Saved!');
    })
    res.redirect('comments/:id');
})

app.listen(port, (req, res) => {
    console.log("Listening on port 4000.");
})