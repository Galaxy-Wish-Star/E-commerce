//引入路由组件
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Personal from "@/pages/Personal";
import Login from "@/pages/Login";
import News from "@/pages/News";
import AddCartSuccess from "@/pages/AddCartSuccess";
import Site from "@/pages/Site";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
//引入二级路由
import Wicket from "@/pages/Personal/Wicket";
import GroupOrder from "@/pages/Personal/groupOrder";
// import Comments from '@/pages/Detail/comments'
// import goodsInfo from '@/pages/Detail/goodsInfo'
//配置路由
export default [
    {
        path: "/paysuccess",
        component: PaySuccess,
        name: "paysuccess",
    },
    {
        path: "/pay",
        component: Pay,
        name: "pay",
        beforeEnter: (to, from, next) => {
            //去交易页面,必须是从购物车而来
            if (from.path === "/trade") {
                next();
            } else {
                next(false);
            }
        },
    },
    {
        path: "/trade",
        component: Trade,
        name: "trade",
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面,必须是从购物车而来
            if (from.path === "/shopcart") {
                next();
            } else {
                next(false);
            }
        },
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
        // children: [
        //     {
        //         path:'goodsinfo',
        //         component: goodsInfo,
        //     },
        //     {
        //         path: 'comments',
        //         component: Comments,
        //     },
        //     {
        //         path:'detail',
        //         redirect: '/detail/goodsInfo',
        //     }
        // ]
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
        //二级路由
        children: [
            {
                path: "myorder",
                component: Wicket,
                name: "myorder",
            },
            {
                path: "grouporder",
                component: GroupOrder,
                name: "grouporder",
            },
            {
                //访问父路由跳转默认界面
                path: "/personal",
                redirect: "/personal/myorder",
            },
        ],
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
