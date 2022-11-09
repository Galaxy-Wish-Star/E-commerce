//对axios进行二次封装
import axios from "axios";
const request = axios.request({
    //配置对象
    baseUrl: "/api",
    timeout: 5000,
});

//请求拦截器

export default axios;
