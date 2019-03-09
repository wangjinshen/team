/*
 * @Author: yangliu 
 * @Date: 2019-03-08 14:45:37 
 * @Last Modified by: yangliu
 * @Last Modified time: 2019-03-08 21:03:40
 * @params : routes
 */
import app from '../app';
import dynamic from 'dva/dynamic';

let Routers = [
    {
        path:'/login',
        component: dynamic({
            app,
            component: () => import('../pages/login/index.jsx'),
        })
    },
    {
        path:'/home',
        component: dynamic({
            app,
            component: () => import('../pages/home/home.jsx'),
        })
    },
    
]
export default Routers