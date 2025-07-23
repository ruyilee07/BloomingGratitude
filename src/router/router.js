import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";

const routes = [
    {
        path: "/",
        name: "app",
        component: () => store.state.display.isMobile ? import("../components/Layout/mLayout.vue") : import("../components/Layout/layout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => store.state.display.isMobile ? import("../components/home/mHome.vue") : import("../components/home/home.vue")
            },
            {
                path: "design-detail",
                name: "mission",
                component: () => store.state.display.isMobile ? import("../components/mission/mMission.vue") : import("../components/mission/mission.vue")
            },
            {
                path: "development-history",
                name: "development",
                component: () => store.state.display.isMobile ? import("../components/development/mDevelopment.vue") : import("../components/development/development.vue")
            },
            {
                path: "about",
                name: "about",
                component: () => store.state.display.isMobile ? import("../components/about/mAbout.vue") : import("../components/about/about.vue")
            }
        ]
    },
    {
        path: "/app/:gratitudeID",
        name: "app-share",
        component: () => import("../components/share/share.vue"),
        props: true
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