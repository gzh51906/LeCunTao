import React,{Component} from 'react'
import { Icon , Radio , Input , Button } from 'antd'

import './index.css'

class LogReg extends Component{
    state = {
        current:0
    }

    gohome(){
        this.props.history.push('/home')
    }

    goto(current){
        this.setState({
            current
        })
    }
    render(){
        return (
            <div>
                <div style={{display:"flex",height:"50px"}}>
                    <Icon type="close" style={{flex:"1",lineHeight:"50px",fontSize:"20px",color:"red"}} onClick={this.gohome.bind(this)}/>
                    <p style={{flex:"8",lineHeight:"50px",textAlign:"center",fontSize:"16px"}}>{this.state.current===0?'登录':'注册'}</p>
                </div>
                <div style={{textAlign:"center",marginBottom:"30px"}}>
                <Radio.Group>
                    <Radio.Button onClick={this.goto.bind(this,0)} className={this.state.current===0?'login-btn':''}>登录</Radio.Button>
                    <Radio.Button onClick={this.goto.bind(this,1)} className={this.state.current===1?'login-btn':''}>注册</Radio.Button>
                </Radio.Group>
                </div>
                {this.state.current===0?
                <div className="inputText">
                    <Input placeholder="请输入手机号码" />
                    <br/>
                    <br/>
                    <Input.Password placeholder="请填写密码" />
                    <br/>
                    <br/>
                    <Button type="danger" style={{width:"80%"}}>登录</Button>
                </div>
                :
                <div className="inputText">
                    <Input placeholder="注册手机号码" />
                    <br/>
                    <br/>
                    <Input.Password placeholder="请输入密码" />
                    <br/>
                    <br/>
                    <Button type="danger" style={{width:"80%"}}>注册</Button>

                </div>
                }
            </div>
        )
    }
}
export default LogReg;