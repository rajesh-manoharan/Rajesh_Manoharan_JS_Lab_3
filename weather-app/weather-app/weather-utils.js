class WeatherUtils {
    static convertResponse(responseJSON) {
        const weatherData = {
            locationPlace: `${responseJSON.name}, ${responseJSON.sys.country}`,
            todayDate: WeatherUtils.getDate(),
            currentTemparature: responseJSON.main.temp,
            weatherType: responseJSON.weather[0].main,
            minTemparature: responseJSON.main.temp_min,
            maxTemparature: responseJSON.main.temp_max
        }
        return weatherData;
    }

    static getDate() {
        const today = new Date();
        return today.toLocaleDateString("us-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
}

export { WeatherUtils };