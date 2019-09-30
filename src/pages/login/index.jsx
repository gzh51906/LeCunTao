import React, { Component } from "react";
import {  Icon, Input, Button } from "antd";
import axios from 'axios'



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val.target.value
        })
    }
    loghome(){
        axios.post('http://localhost:1996/user/login',{
            username:this.state.username,
            password:this.state.password
        }).then(({data})=>{
            console.log(data)
            let {code} = data
            let {authorization:token} = data.data
            let {username} = data.data
            // let { code, data:{authorization:token}} = datas

            if(code===1){
                localStorage.setItem('authorization',token)
                localStorage.setItem('username',username)
                // localStorage.setItem('authorization',   )
                this.props.history.push('/home');
                // let yinyin = localStorage.getItem('authorization')
                // console.log(yinyin)
            }else{
                alert('用户名或者密码错误')
            }
        })
    }

// 无账号 去注册页面
goreg(){
    this.props.history.push("/reg")
}


// 返回首页
gohome() {
    this.props.history.push("/home");
}


render() {
    console.log("955",this.state)
    return (
        <div>
            <div style={{display:"flex",height:"50px",borderBottom:"1px solid #ccc"}}>
                    <Icon type="close" style={{flex:"1",lineHeight:"50px",fontSize:"20px",color:"red"}} onClick={this.gohome.bind(this)}/>
                    <p style={{flex:"8",lineHeight:"50px",textAlign:"center",fontSize:"16px"}}>登录</p>
            </div>
            <div style={{width:'80%',margin:'20px auto'}}>
                <Input 
                    placeholder="请输入登录手机号"
                    style={{marginBottom:'20px'}}
                    onChange={value=>{this.handleChange('username',value)}}
                />

                <Input.Password 
                    placeholder="请输入登录密码" 
                    style={{marginBottom:'20px'}}
                    onChange={value=>{this.handleChange('password',value)}}
                />

                <Button type="primary" style={{width:'45%',marginRight:'10%'}} onClick={this.loghome.bind(this)}>
                    登录
                </Button>
                <Button type="danger" style={{width:'45%'}} onClick={this.goreg.bind(this)}>
                    无账号？去注册
                </Button>
            </div>
            
            


            
        </div>
        
    );
}
}


export default Login;
