//引入路由组件
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Personal from "@/pages/Personal";
import Login from "@/pages/Login";
import News from "@/pages/News"
import AddCartSuccess from '@/pages/AddCartSuccess'

//配置路由
export default [
    {
        path: "/addcartsuccess",
        component: AddCartSuccess,
        name: "addcartsuccess",
    },
    {
        path: "/news",
        component: News,
        name: "news",
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        name: "detail",
    },
    {
        path: "/home",
        component: Home,
        name: "home",
    },
    {
        path: "/search/:keyword?",
        component: Search,
        name: "search",
    },
    {
        path: "/register",
        component: Register,
        name: "register",
    },
    {
        path: "/personal",
        component: Personal,
        name: "personal",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "*",
        redirect: "/home",
    },
];
