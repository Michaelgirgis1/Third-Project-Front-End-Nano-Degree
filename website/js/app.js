// /* Global Variables */

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
let baseURL = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid'
let apiKey = '10c08788a187a61da26a8b01fbe1177a';
const newId = document.getElementById("zip").value
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// const newWeatherFeeling=  document.getElementById('feeling').value;

/* Function called by event listener */
function performAction(e){
    getWeather(baseURL,apiKey)
    
}
    
/* Function to GET Web API Data*/
const getWeather = async (baseURL, id)=>{
  console.log(id)
    const res = await fetch(`${baseURL}${id}`)
    try {
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
// /* Function to POST data */
// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }

// postData('/add', {answer:42});

// /* Function to GET Project Data */
// const retrieveData = async (url='') =>{ 
//     const request = await fetch(url);
//     try {
//     // Transform into JSON
//     const allData = await request.json()
//     }
//     catch(error) {
//       console.log("error", error);
//       // appropriately handle the error
//     }
//   }