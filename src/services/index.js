import req from "../utils/request";
import { app } from "../constants";

class Services {
    async getInitialIPLocation() {
        return await fetch("http://ip-api.com/json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    }

    getWeatherBasedOnCoordinates(lat, lon) {
        const options = {
            method: "GET",
            "Content-Type": "application/json",
        };
        return req.get("weather?lat=" + lat + "&lon=" + lon + "&appid=" + app.API_KEY, options);
    }
}

export default new Services();
