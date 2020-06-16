// /* Global Variables */

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+ '.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=10c08788a187a61da26a8b01fbe1177a';


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);


/* Function called by event listener */
function performAction(e){
  const zip = document.getElementById("zip").value;
  console.log(zip)
  const feelings =document.getElementById("feelings").value
    getWeather(baseURL,zip,apiKey)
    // console.log(data)
     .then(function(data){
      postData("/addData", {date: newDate, temperature:data.main.temp, feeling: feelings})
     }).then(() => {
      retrieveData();
     })
}
    
/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey)=>{
  const res = await fetch(baseURL + zip + apiKey)
    try {
      const data = res.json()
      return data
    } catch(error){
       console.log("error", error)
    }
  }
// /* Function to POST data */
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'text/plain',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
// /* Function to GET Project Data */
let retrieveData = async () =>{ 
    const request = await fetch('/allData');
    try {
    // Transform into JSON
       const allData = await request.json()
       document.getElementById("date").innerHTML= `date: ${allData[0].date}`;
       document.getElementById("temp").innerHTML = `temp: ${allData[0].temperature}`;
       document.getElementById("content").innerHTML = `i feel: ${allData[0].feeling}`
    }
    catch(error) {
      console.log("error", error);
    }
  }