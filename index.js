const express = require('express');
const bodyParser= require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 8000;
const app = express();


// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));


// Connect the public folder which incluede the stylesheets
app.use(express.static('public'));


// Connect to database


//
app.set('view engine', 'ejs');


// Load the home page
app.get('/', (req, res) => {
    res.render('Home.ejs');
});




app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});