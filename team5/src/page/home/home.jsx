import React, { Component } from 'react'
import RouterMap from '../../routes/routes-map'
import { Link } from 'dva/router';

export default class componentName extends Component {
    render() {
    	let {routes} = this.props
        return (
            <div>
                <p><Link to="home/index">规范化局看</Link></p>
                <RouterMap routes={routes}></RouterMap>
            </div>
        )
    }
}
