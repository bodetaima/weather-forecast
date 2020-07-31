import App from "../App.vue";

export default {
    mode: "history",
    routes: [
        {
            path: "/",
            name: "App",
            component: App,
            meta: {
                title: "How's weather?",
            },
        },
    ],
};
