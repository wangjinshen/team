import React, { Component } from 'react'
import { Input , Icon, Button , Checkbox} from 'antd'
import "antd/dist/antd.css"
import style from './style.css'
import {userLogin} from '../../services/example'
import {connect} from 'dva'


class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoLogin:0,
            user_name:'w916peach',
            user_pwd:'Peach0126?',
        };
    }
    changeAutoLogin(){
        this.setState({autoLogin:!this.state.autoLogin})
    }

    logins = (user,pwd) =>{
        userLogin({user_name:user,user_pwd:pwd}).then(res=>{
        if(res.data.code === 1){
            alert('succc')
        }else{
            alert(res.data.msg)
        }
            
        })

        this.props.dispatch({type:'login/fetch',payload:user});

        
        
        
    }
    render() {
        const {user_name , user_pwd} = this.state
        return (
            <div className={style.wrap}>
                <div className={style.input}>
                    <Input placeholder="用户名" value={user_name} onChange={(ev)=>this.setState({user_name:ev.target.value})} prefix={<Icon type="user_name" style={{ color: 'rgba(0,0,0,.25)'}}/>}></Input>
                </div>
                <div className={style.input}>
                    <Input placeholder="密码" value={user_pwd} type="password" onChange={(ev)=>this.setState({user_pwd:ev.target.value})} prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }}/>}></Input>
                </div>
                <div className={style.group}>
                <Checkbox checked={this.state.autoLogin} onChange={ev=>this.changeAutoLogin(ev)}>记住密码</Checkbox>
                <a style={{ float: 'right' }} href="###">忘记密码</a>
            </div>
                <div className={style.btn}>
                    <Button type="primary" onClick={()=>this.logins(user_name,user_pwd)}>登录</Button>
                </div>
            </div>
        )
    }

}

export default connect()(componentName)