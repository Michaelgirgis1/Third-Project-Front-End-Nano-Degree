// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;
// Setup Server
// const server = app.listen(port, listening);
app.get('/', function (req, res) {
    res.send('Hello World!')
    
})
app.listen(port, function (){
    console.log(`Example app listening at http://localhost:${port}`)
})
   
app.post('/add', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.temperature,
    facts: req.body.date,
    fav: req.body.user
  }

  projectData.push(newEntry)
  console.log(animalData)
}


//fake Api
// const fakeApi = {
//     id: '624852',
//     feeling: 'i am really happy'
// }

// app.get('/fakefeeling', getFakeData);
//  function getFakeData(req, res){
//          res.send(fakeApi)
//  }
