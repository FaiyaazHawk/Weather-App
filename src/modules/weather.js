/////function to pull data from openweathermap API
const weather = (() => {
async function recieveLocationData(location){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ff02d978e63fdb995bf6241ddbf8661b`, {mode: 'cors'});
    const weatherData = await response.json()
    if (weatherData.cod != 200)
        console.log('Response not found');
    const data = pullData(weatherData)
    return data;
}
/////pulls relevant data from api call
function pullData(obj) {
    const {name: name,
           main: {temp: temp, feels_like: feelslike, humidity: humidity},
           sys: {country: country},
           wind: {speed: windspeed}
                        } = obj;
    return {name, temp, feelslike, humidity, country, windspeed}
}

return {recieveLocationData}
})();


export default weather