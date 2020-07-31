<template>
    <div class="app-container">
        <div class="my-32 text-center">
            <p class="text-5xl">HOW'S WEATHER?</p>
            <p>Don't let the rain ruining your day.</p>
            <div class="flex flex-row justify-center my-2">
                <input
                    class="p-2 mx-1 border border-blue-500 rounded focus:border-blue-700"
                    placeholder="Enter your city"
                />
                <button
                    class="p-2 bg-blue-300 border border-blue-500 rounded active:bg-blue-700 hover:text-white hover:bg-blue-500"
                >
                    FIND
                </button>
            </div>
            <span v-if="ipLocationPending === true">Loading...</span>
            <p v-if="ipLocationPending === false">
                You're currently in {{ ipLocation.city }}, {{ ipLocation.country }}
            </p>
            <div v-if="getWeatherPending === true">Loading...</div>
            <div v-if="getWeatherPending === false && !isEmpty(weather)">
                <p class="text-6xl">{{ Math.trunc(weather.main.temp - 273.15) }} °C</p>
                <p>
                    Feels like {{ Math.trunc(weather.main.feels_like - 273.15) }} °C.
                    <span v-for="wt in weather.weather" :key="wt.id">{{ wt.main }}.</span>
                </p>
            </div>
        </div>
        <div class="relative bottom-auto text-center">
            <p class="text-sm">
                Weather forecast provide by <a href="https://openweathermap.org/" target="blank">OpenWeatherMap</a>
            </p>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "App",
    data() {
        return {};
    },
    computed: {
        ...mapState({
            ipLocationPending: (state) => state.ipLocationPending,
            ipLocation: (state) => state.ipLocation,
            ipLocationError: (state) => state.ipLocationError,
            getWeatherPending: (state) => state.getWeatherPending,
            weather: (state) => state.weather,
            weatherError: (state) => state.weatherError,
        }),
    },
    methods: {
        isEmpty(obj) {
            for (let key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    return false;
                }
            }
            return true;
        },
    },
    mounted() {},
};
</script>
<style>
body {
    background-image: url("./assets/weather_background_cute_stylized_icons_decor_6835599.jpg");
}
.app-container {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding-bottom: 15px;
}
</style>
