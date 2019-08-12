import express from 'express';
//import db from './db/dbClaims';
import bodyParser from 'body-parser';
import router from './routes/index.js';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Define static file path so that you don’t need to resolve path in every routes
//1. Store all HTML files in view folder.
app.use(express.static(__dirname + '/ui/view'));
//2. Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/ui/script'));


app.use(router);


const PORT = 5000;

app.listen( process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
});