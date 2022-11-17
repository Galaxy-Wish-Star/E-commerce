//引入路由组件
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Personal from "@/pages/Personal";
import Login from "@/pages/Login";
import News from "@/pages/News";
import AddCartSuccess from '@/pages/AddCartSuccess';
import Site from "@/pages/Site";
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

//配置路由
export default [
    {
        path: "/trade",
        component: Trade,
        name: "trade",
    },
    {
        path: "/Shopcart",
        component: ShopCart,
        name: "Shopcart",
    },
    {
        path: "/addcartsuccess",
        component: AddCartSuccess,
        name: "addcartsuccess",
    },
    {
        path: "/site",
        component: Site,
        name: "site",
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
