import React,{Component} from 'react'
import { Icon, Input, Button } from "antd";
import axios from 'axios'

class Reg extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }




    // 监控输入框的变化，及时更新state中的值
    handleChange(key, val) {
        this.setState({
            [key]: val.target.value
        })
    }
    // 注册
    submit(){
        console.log(this.state)
        console.log(this.state.username,this.state.password)
        axios.post('http://localhost:1996/user/reg',
            {
                username:this.state.username,
                password:this.state.password
            }
        ).then(({data})=>{
            console.log(data)
            if(data.code===1){
                alert('注册成功！')
                this.props.history.replace('/login');
            }else{
                alert("注册失败！")
            }
        })

    }

    // 无账号 去注册页面
    gologin(){
        this.props.history.push("/login")
    }
    // 返回首页
    gohome(){
        this.props.history.push('/home')
    }

    render(){
        return (
            <div>
                <div style={{display:"flex",height:"50px"}}>
                    <Icon type="close" style={{flex:"1",lineHeight:"50px",fontSize:"20px",color:"red"}} onClick={this.gohome.bind(this)}/>
                    <p style={{flex:"8",lineHeight:"50px",textAlign:"center",fontSize:"16px"}}>注册</p>
                </div>

                <div style={{width:'80%',margin:'20px auto',textAlign:'center'}}>
                    <Input
                        type='number'
                        placeholder="请输入注册的手机号"
                        style={{marginBottom:'20px'}}
                        onChange={value=>{this.handleChange('username',value)}}
                    />

                    <Input
                        type='password'
                        placeholder="请输入注册密码" 
                        style={{marginBottom:'20px'}}
                        onChange={value=>{this.handleChange('password',value)}}
                    />

                    <Button type="primary" style={{width:'45%',marginRight:'10%'}}  onClick={this.gologin.bind(this)}>
                        有账号？去登录
                    </Button>
                    <Button type="danger" style={{width:'45%'}} onClick={this.submit.bind(this)}>
                        注册
                    </Button>
                </div>
                
                
                
            </div>
        )
    }
}
export default Reg;