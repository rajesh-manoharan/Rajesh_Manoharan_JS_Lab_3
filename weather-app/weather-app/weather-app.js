import { WeatherAPI } from "./weather-api.js";
import { WeatherUtils } from "./weather-utils.js";

class WeatherApp {
    init() {
        this.addListener()
    }

    addListener() {
        const searchBox = document.querySelector('.search-box');
        searchBox.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) {
                getWeatherDetails(event.target.value);
            }
        })
    }
}

async function getWeatherDetails(userInput) {
    const weatherAPI = new WeatherAPI();
    weatherAPI.constructURL(userInput);
    const responseJson = await weatherAPI.invokeURL();
    if (responseJson.cod === '404') {
        document.querySelector('.location .city').innerText = 'Try with a valid City';
        document.querySelector('.location .date').innerText = '';
        document.querySelector('.current .temp').innerHTML = '';
        document.querySelector('.weather').innerText = '';
        document.querySelector('.hi-low').innerText = '';
    } else {
        const responseObj = WeatherUtils.convertResponse(responseJson);
        printWeatherDetails(responseObj);
    }
};

function printWeatherDetails(responseObj) {
    document.querySelector('.location .city').innerText = responseObj.locationPlace;
    document.querySelector('.location .date').innerText = responseObj.todayDate;
    document.querySelector('.current .temp').innerHTML = `${responseObj.currentTemparature}<span>°c</span>`;
    document.querySelector('.weather').innerText = responseObj.weatherType;
    document.querySelector('.hi-low').innerText = `${responseObj.minTemparature} °c / ${responseObj.maxTemparature}°c `
}

export { WeatherApp };