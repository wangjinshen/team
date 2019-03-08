import React from 'react'
import {Switch,Route,Redirect} from 'dva/router'

class RouterMap extends React.Component{
    
    render(){
        let {routes} = this.props  
        let defaultRoute = <Route path="/" component={()=>{
                return <Redirect to="/login"></Redirect>
            }
        } key={1} exact></Route>        
        return <Switch>{
                    routes.length && routes.map((item,index)=>{
                        let Comp = item.component
                        return <Route path={item.path} component={(apiroute)=>{   
                            console.log(item.children,'12312')  
                            return <Comp routes={item.children} {...apiroute}></Comp>
                        }} key={index}></Route>
                    }).concat([defaultRoute])
                }
                </Switch>
    }
}
export default RouterMap