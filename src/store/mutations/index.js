import { app } from "../actions/actionTypes";

export default {
    [app.GET_INITIAL_IP_LOCATION](state) {
        state.ipLocationPending = true;
    },
    [app.GET_INITIAL_IP_LOCATION_SUCCESS](state, payload) {
        state.ipLocationPending = false;
        state.ipLocation = payload;
    },
    [app.GET_INITIAL_IP_LOCATION_FAILED](state, payload) {
        state.ipLocationPending = false;
        state.ipLocationError = payload;
    },
    [app.GET_WEATHER_BASED_ON_COORDINATES](state) {
        state.getWeatherPending = true;
    },
    [app.GET_WEATHER_BASED_ON_COORDINATES_SUCCESS](state, payload) {
        state.getWeatherPending = false;
        state.weather = payload;
    },
    [app.GET_WEATHER_BASED_ON_COORDINATES_FAILED](state, payload) {
        state.getWeatherPending = false;
        state.weatherError = payload;
    },
};
