const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const appID = "7ae013a7ad8a12cfc0d57f2add53b296";
const metric = "metric";

class WeatherAPI {
    constructURL(userInput) {
        this.apiURL = new URL(baseURL);
        this.apiURL.searchParams.append("q", userInput);
        this.apiURL.searchParams.append("appid", appID);
        this.apiURL.searchParams.append("units", metric);
    }

    async invokeURL() {
        const fetchResponseObj = await fetch(this.apiURL);
        const responseJSON = await fetchResponseObj.json();
        return responseJSON;
    }
}

export { WeatherAPI }