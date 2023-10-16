import { WeatherAPI } from './weather-api.js';
import { WeatherUtils } from './weather-utils.js';

async function testWeatherUtility() {
    const weatherAPI = new WeatherAPI();
    weatherAPI.constructURL("France");
    const responseJson = await weatherAPI.invokeURL();

    WeatherUtils.convertResponse(responseJson);
}

testWeatherUtility();