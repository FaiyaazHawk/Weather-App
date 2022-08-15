/////Box to put in data
const box = document.createElement('div')
box.className = 'databox'
document.body.appendChild(box);


/////function to pull data from openweathermap API

async function recievelocationdata(location){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff02d978e63fdb995bf6241ddbf8661b`, {mode: 'cors'});
    const weatherData = await response.json()
    return weatherData;
    
}
const data = recievelocationdata('Toronto')

/////functions to pull main weather data from API response

async function pullMain() {
    const object = await data;
    return object.main;
}

const weather = pullMain(data);

/////function to update box
async function updateBox() {
    await weather;
    weather.then(data => fillBox(data));
    
}

function fillBox (data){
    console.log(data);
    box.innerText = JSON.stringify(data);
}

updateBox();
