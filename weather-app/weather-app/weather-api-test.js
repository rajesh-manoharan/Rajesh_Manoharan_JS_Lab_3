import { WeatherAPI } from './weather-api.js';

function testContructionURL() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.constructURL("Delhi");
}

async function testInvokeURL() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.constructURL("Delhi");
    await weatherAPI.invokeURL();
}

// testContructionURL();
testInvokeURL();