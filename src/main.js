import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import appRouter from "./router";
import appStore from "./store";
import "./styles/index.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(appStore);
const router = new VueRouter(appRouter);

const DEFAULT_TITLE = "How's Weather?";
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

router.beforeEach(async (to, from, next) => {
    const { dispatch } = store;
    await dispatch("getInitialIPLocation");
    next();
});

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
