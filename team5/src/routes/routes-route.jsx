/*
 * @Author: yangliu 
 * @Date: 2019-03-08 14:45:37 
 * @Last Modified by: yangliu
 * @Last Modified time: 2019-03-08 16:54:12
 * @params : routes
 */
import app from '../app';
import dynamic from 'dva/dynamic';

let Routers = [
    {
        path:'/login',
        component: dynamic({
            app,
            component: () => import('../page/login/login.jsx'),
        })
    },
    {
        path:'/home',
        component: dynamic({
            app,
            component: () => import('../page/home/home.jsx'),
        }),
        children:[
            {
                path:'/home/index',
                component: dynamic({
                    app,
                    model:[()=>import('../')],
                    component: () => import('../page/home/index.jsx'),
                }),
            }
        ]
    },
    
]
export default Routers