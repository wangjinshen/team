import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import { connect } from 'dva';
import "./css/home.css"
import 'element-theme-default';
import { Route} from 'dva/router';
import TestList from '../testList'
import Add from '../add'
import Look from '../look'

import {userIn} from '../../services/example'
import { Layout, Menu ,Button } from 'element-react';



 class Home extends Component {
    onOpen() {

    }

    onClose() {

    }
    componentDidMount(){
        console.log(userIn());
        
        // userIn().then(res=>{
        //     console.log(res,'56');
        // })
    }
    render() {
        return (
            <div className="home">
                <header>
                    <p className="left">网站工程</p>
                    <div className="right">
                        <p className="center">
                        亲爱的<b>cabh</b>
                        你的身份是<b>nksa;v</b>
                        </p>
                    </div>
                    <div>
                    <Button>退出登录</Button>
                    </div>
                
                </header>
                <div className="count">
                    <div className="count-left">
                        <Layout.Row className="tac">
                            <Layout.Col span={16}>
                                <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                                    <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>考试管理</span>}>
                                        <Menu.Item index="1-1">
                                            <NavLink to="/home/add">添加试题</NavLink>
                                        </Menu.Item>
                                        <Menu.Item index="1-2">
                                            <NavLink to="/home/testList">试题分类</NavLink>
                                        </Menu.Item>
                                        <Menu.Item index="1-3">
                                            <NavLink to="/home/look">查看试题</NavLink>
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="2" title={<span><i className="el-icon-plus"></i>用户管理</span>}>
                                        <Menu.Item index="2-1">
                                            <NavLink to="/home/testList">添加用户</NavLink>
                                        </Menu.Item>
                                        <Menu.Item index="2-2">
                                            <NavLink to="/home/add">用户展示</NavLink>
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu index="3" title={<span><i className="el-icon-setting"></i>班级管理</span>}>
                                        <Menu.Item index="3-1">
                                            <NavLink to="/home/testList">添加试题</NavLink>
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </Layout.Col>
                        </Layout.Row>
                    </div>
                    <div className="count-right">
                       <Route path='/home/testList' component={TestList}></Route>
                       <Route path='/home/add' component={Add}></Route>
                       <Route path='/home/look' component={Look}></Route>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(Home)