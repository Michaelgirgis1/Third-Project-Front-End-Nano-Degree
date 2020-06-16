// Setup empty JS object to act as endpoint for all routes
let projectData = [];

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
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;
// Setup Server
// const server = app.listen(port, listening);

app.listen(port, function (){
    console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/allData', addWeather);

function addWeather(request,response){   
  response.send(projectData)
  console.log(projectData)
}


app.post("/addData", addData);

function addData(request, response){
    newEntry = {
        date: request.body.date,
        temperature: request.body.temperature,
        feeling: request.body.feeling
    }
    projectData.push(newEntry)
}
