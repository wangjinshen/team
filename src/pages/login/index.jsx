import {Component}  from 'react';
import { connect } from 'dva';
import { Input,Checkbox, Button } from 'element-react';
import 'element-theme-default';
import "./css/login.css"
import "../../common/index.css"
import {userLogin} from '../../services/example'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            user_name:'w916peach',
            user_pwd:'Peach0126?',
        }
    }
  handleIconClick(ev) {
      
  }
  login = () => {
    const {user_name,user_pwd} = this.state
    userLogin({user_name:user_name,user_pwd:user_pwd}).then(res=>{
        if(res.data.code === 1){
            this.props.history.push("/home")
        }else{
            alert(res.data.msg)
        }
    })
  }
  render() {
      return (
          <div className="login">
              <div className="login-count">
                  <div className="left">
                      <h1>八维网站考试系统</h1>
                      <p>考试与班级管理一体化的整合式服务平台</p>
                  </div>
                  <div className="right">
                      <h1>登录</h1>
                      <Input
                          icon="time"
                          placeholder="用户名"
                          onIconClick={this.handleIconClick.bind(this)}
                          value={this.state.user_name}
                          onInput={(e)=>{
                            this.setState({
                                user_name:e.target.value
                            })
                          }}
                      />
                      <Input
                          icon="time"
                          placeholder="密码"
                          type='password'
                          onIconClick={this.handleIconClick.bind(this)}
                          value={this.state.user_pwd}
                          onInput={(e)=>{
                            this.setState({
                                user_pwd:e.target.value
                            })
                          }}
                      />
                      <Checkbox checked>记住账号</Checkbox>
                      <Button type="primary" onClick={this.login}>登录</Button>
                  </div>
              </div>

          </div>
      );
  }
}

export default connect()(Login);
