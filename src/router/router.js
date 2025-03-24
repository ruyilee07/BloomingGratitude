import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";
import Layout from "../components/Layout/layout.vue"
import mLayout from "../components/Layout/mLayout.vue"
import home from "../components/home/home.vue"
import mission from "../components/mission/mission.vue"
import development from "../components/development/development.vue"
import about from "../components/about/about.vue"

const routes = [
    {
        path: "/",
        name: "app",
        component: store.state.display.isMobile ? mLayout : Layout,
        children: [
            {
                path: "",
                name: "home",
                component: home
            },
            {
                path: "design-detail",
                name: "mission",
                component: mission
            },
            {
                path: "development-history",
                name: "development",
                component: development
            },
            {
                path: "about",
                name: "about",
                component: about
            }
        ]
    }
];

// dash
const router = createRouter({
    history: createWebHashHistory('/BloomingGratitude/'),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;