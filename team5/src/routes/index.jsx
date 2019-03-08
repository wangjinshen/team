
import React from 'react'
import Routers from './routes-route'
import RouterMap from './routes-map'
import { HashRouter as Router } from 'dva/router';

class RouteView extends React.Component{
    render(){
        let {routes} = this.props     
        return <Router><RouterMap routes={routes===undefined?Routers:routes}></RouterMap></Router>
    }
}
function RouterConfig(){
    return <RouteView></RouteView>
}
export default RouterConfig