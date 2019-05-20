import App from "@/App";

const HomePage = r =>
    require.ensure(
        [],
        () => r(require("./views/home/HomePage.vue")),
        "homepage"
    );
const FormPage = r =>
    require.ensure([], () => r(require("./views/FormPage.vue")), "formpage");
const AboutPage = r =>
    require.ensure([], () => r(require("./views/AboutPage.vue")), "aboutpage");
const PanelRightPage = r =>
    require.ensure(
        [],
        () => r(require("./views/PanelRight.vue")),
        "PanelRight"
    );
const PanelLeftPage = r =>
    require.ensure([], () => r(require("./views/PanelLeft.vue")), "PanelLeft");

const DynamicRoutePage = r =>
    require.ensure(
        [],
        () => r(require("./views/dynamic-route.vue")),
        "dynamic-route"
    );

const NotFoundPage = r =>
    require.ensure(
        [],
        () => r(require("./views/NotFoundPage.vue")),
        "not-found"
    );

export default [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/panel-left/",
        component: PanelLeftPage
    },
    {
        path: "/panel-right/",
        component: PanelRightPage
    },
    {
        path: "/form/",
        component: FormPage
    },
    {
        path: "/about/",
        component: AboutPage
    },
    {
        path: "/dynamic-route/blog/:blogId/post/:postId/",
        component: DynamicRoutePage
    },
    {
        path: "(.*)",
        component: NotFoundPage
    }
];
