import Services from "../../services";
import { app } from "./actionTypes";

export default {
    getInitialIPLocation({ commit }) {
        commit(app.GET_INITIAL_IP_LOCATION);
        return Services.getInitialIPLocation().then(
            (result) => {
                commit(app.GET_INITIAL_IP_LOCATION_SUCCESS, result);
                commit(app.GET_WEATHER_BASED_ON_COORDINATES);
                Services.getWeatherBasedOnCoordinates(Math.trunc(result.lat), Math.trunc(result.lon)).then(
                    (result) => {
                        commit(app.GET_WEATHER_BASED_ON_COORDINATES_SUCCESS, result);
                    },
                    (error) => {
                        commit(app.GET_WEATHER_BASED_ON_COORDINATES_FAILED, error);
                    }
                );
                return result;
            },
            (error) => {
                commit(app.GET_INITIAL_IP_LOCATION_FAILED, error);
                return error;
            }
        );
    },
    getWeatherBasedOnCoordinates({ commit }, { lat, lon }) {
        commit(app.GET_WEATHER_BASED_ON_COORDINATES);
        return Services.getWeatherBasedOnCoordinates(lat, lon).then(
            (result) => {
                commit(app.GET_WEATHER_BASED_ON_COORDINATES_SUCCESS, result);
                return result;
            },
            (error) => {
                commit(app.GET_WEATHER_BASED_ON_COORDINATES_FAILED, error);
                return error;
            }
        );
    },
    searchCities({commit}, {query}) {

    }
};
