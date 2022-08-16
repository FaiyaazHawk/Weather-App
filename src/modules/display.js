const display = (() => {
    function setDisplay(weatherdata) {
        if (!weatherdata) return;

        ////fields
        const name = document.getElementById('name')
        const temp = document.getElementById('temp')
        const feelslike = document.getElementById('feelslike')
        const humidity = document.getElementById('humidity')
        const windspeed = document.getElementById('windspeed')
        const country = document.getElementById('country') 

        name.textContent = `${weatherdata.name}`
        temp.textContent = `${weatherdata.temp} C`
        feelslike.textContent = `Feels like: ${weatherdata.feelslike}`
        humidity.textContent = `Humidity: ${weatherdata.humidity}`
        windspeed.textContent = `Windspeed: ${weatherdata.windspeed}`
        country.textContent = `${weatherdata.country}`
    

    }


    return {setDisplay}
})();

export default display;