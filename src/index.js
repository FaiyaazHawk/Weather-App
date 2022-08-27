import weather from "./modules/weather";
import display from "./modules/display";


const searchform = document.getElementById('searchform');
const inputform = document.getElementById('inputform');
const inputbtn = document.getElementById('button')


searchform.addEventListener("submit", (e) => {
    e.preventDefault();
  });


inputbtn.addEventListener("click", async () => {
    if (inputform.value === "") return;
    console.log(inputform.value)
    const weatherData = await weather.recieveLocationData(inputform.value);
    display.setDisplay(weatherData);
  });