


/////function to pull data from openweathermap API

async function recievelocationdata(location){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff02d978e63fdb995bf6241ddbf8661b`, {mode: 'cors'});
    const weatherData = await response.json()
    console.log(weatherData.name);
}

recievelocationdata('Toronto');