const express = require('express');
const app = express();
const data = require('./data.json');
const port = 4000;

app.use(express.json());
app.set('view engine', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, (req, res) => {
    console.log("Listening on port 4000.");
})