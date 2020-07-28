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
        </div>
    </div>
</template>
<script>
export default {
    name: "App",
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
