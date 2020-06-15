// /* Global Variables */

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='
const apiKey = '10c08788a187a61da26a8b01fbe1177a';
// const newId = document.getElementById("zip").value
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// const newWeatherFeeling=  document.getElementById('feeling').value;

/* Function called by event listener */
function performAction(e){
  // const zip = document.getElementById("zip").value;
  const feelings =document.getElementById("feelings").value
    getWeather(baseURL,apiKey)
    // console.log(data)
     .then(function(data){
      postData("/addData", {date: d, temperature:data.main.temp, feeling: feelings})

     })
     debugger
      retrieveData()  
}
    
/* Function to GET Web API Data*/
const getWeather = async (baseURL, apiKey)=>{
  const res = await fetch(baseURL + apiKey)
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
          'Content-Type': 'application/json',
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
const retrieveData = async () =>{ 
    const request = await fetch('/allData');
    debugger
    try {
    // Transform into JSON
       const allData = await request.json()
       console.log(allData)
       document.getElementById("date").innerHTML= `date: ${allData[0].date}`;
       document.getElementById("temp").innerHTML = `temp: ${allData[0].temp}`;
       document.getElementById("content").innerHTML = `i feel: ${allData[0].feeling}`
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }