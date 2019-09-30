import React,{Component} from 'react'
import { Icon , Badge } from 'antd'

class Mine extends Component{
    componentWillMount(){
        let token = localStorage.getItem('authorization')
        if(!token){
            this.props.history.push('/login')
        }
    }
    render(){
        let username = localStorage.getItem('username')
        return (
            <div>
                <div className="mine_top" style={{width:"100%",height:"200px",position:"relative"}}>
                    <img src={require("../../assets/img/mine_background.png")} alt=""
                    style={{display:"inlineBlock",width:"100%",height:"200px"}}
                    />
                    <Icon type="setting" 
                    style={{position:"absolute",right:"20px",top:"15px",color:"#fff",fontSize: "20px"}}
                    />
                    <div 
                    style={{
                        position:"absolute",
                        left:"50%",
                        top:"50%",
                        marginLeft:"-50px",
                        marginTop:"-50px",
                        textAlign:"center"
                    }}
                    >
                        <img src={require("../../assets/img/mine.png")} alt=""
                        style={{display:"block",width:"77px",height:"77px",borderRadius:"40px",marginBottom:"10px"}}
                        />
                        <span style={{color:"#fff"}}>lct_{username}</span>
                    </div>
                </div>

                <div className="myPay" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <span>我的订单</span>
                    <p>
                        <span style={{color:"#ccc",marginRight:"5px"}}>查看全部订单</span>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>

                <ul style={{padding:"0",margin:"0",listStyle:"none",display:"flex",marginTop:"15px",borderBottom:"1px solid #ccc"}}>
                    <li style={{padding:"0",margin:"0",listStyle:"none",flex:"1",textAlign:"center"}}>
                        <Badge count={0} showZero>
                            <Icon type="save" theme="twoTone" twoToneColor="#FF2D2D" style={{fontSize:"30px"}}/>
                        </Badge>
                        <span style={{display:"block"}}>待付款</span>
                    </li>
                    <li style={{padding:"0",margin:"0",listStyle:"none",flex:"1",textAlign:"center"}}>
                        <Badge count={0} showZero>
                            <Icon type="shop" theme="twoTone" twoToneColor="#FF2D2D" style={{fontSize:"30px"}}/>
                        </Badge>
                        <span style={{display:"block"}}>待发货</span>
                    </li>
                    <li style={{padding:"0",margin:"0",listStyle:"none",flex:"1",textAlign:"center"}}>
                        <Badge count={0} showZero>
                            <Icon type="car" theme="twoTone" twoToneColor="#FF2D2D" style={{fontSize:"30px"}}/>
                        </Badge>
                        <span style={{display:"block"}}>待收货</span>
                    </li>
                    <li style={{padding:"0",margin:"0",listStyle:"none",flex:"1",textAlign:"center"}}>
                        <Badge count={0} showZero>
                            <Icon type="insurance" theme="twoTone" twoToneColor="#FF2D2D" style={{fontSize:"30px"}}/>
                        </Badge>
                        <span style={{display:"block"}}>退款退货</span>
                    </li>
                </ul>

                <div style={{width: "100%", height:"10px",background: "#f0f0f0"}}></div>

                <div className="myJiHe" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <img src={require("../../assets/img/jihe.png")} alt="" />
                        <span>我的订单</span>
                    </p>
                    <p>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>
                <div className="myDress" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <Icon type="environment" theme="twoTone" twoToneColor="#00DB00" style={{fontSize:"15px"}}/>
                        <span>收货地址</span>
                    </p>
                    <p>
                        <span style={{color:"#ccc",marginRight:"5px"}}>管理地址信息</span>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>
                <div className="myCoupon" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <Icon type="credit-card" theme="twoTone" twoToneColor="#FF8000" style={{fontSize:"15px"}}/>
                        <span>卡券包</span>
                    </p>
                    <p>
                        <span style={{color:"#ccc",marginRight:"5px"}}>红包</span>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>

                <div style={{width: "100%", height:"10px",background: "#f0f0f0"}}></div>

                <div className="myBalance" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <Icon type="money-collect" theme="twoTone" twoToneColor="#FF0000" style={{fontSize:"15px"}}/>
                        <span>账户余额</span>
                    </p>
                    <p>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>
                <div className="myPayPwd" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <Icon type="account-book" theme="twoTone" twoToneColor="#FF8000" style={{fontSize:"15px"}}/>
                        <span>支付密码</span>
                    </p>
                    <p>
                        <span style={{color:"#ccc",marginRight:"5px"}}>设置、管理支付密码</span>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>

                <div style={{width: "100%", height:"10px",background: "#f0f0f0"}}></div>

                <div className="myPhone" 
                style={{
                    width:"100%",
                    height:"50px",
                    display:"flex",
                    justifyContent:"space-between",
                    lineHeight:"50px",
                    padding:"0 8px",
                    borderBottom:"1px solid #ccc"
                    }}>
                    <p>
                        <Icon type="money-collect" theme="twoTone" twoToneColor="#FF0000" style={{fontSize:"15px"}}/>
                        <span>联系电话</span>
                    </p>
                    <p>
                        <span style={{color:"#ccc",marginRight:"5px"}}>400-088-0692</span>
                        <Icon type="right" style={{color:"#ccc"}}/>
                    </p>
                </div>

                <div style={{width:"100%",height:"46px"}}></div>

            </div>
        )
    }
}
export default Mine;