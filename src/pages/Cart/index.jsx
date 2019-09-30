import React,{Component} from 'react'
import { Icon , Checkbox ,InputNumber} from 'antd'
import {connect} from "react-redux";




class Cart extends Component{
    componentWillMount(){
        let token = localStorage.getItem('authorization')
        if(!token){
            this.props.history.push('/login')
        }
    }

    componentDidMount(){
        console.log(this.props.goodslist)
    }
    render(){
        return (
            <div className="cart">
                <div className="cart_header" style={{display:"flex",textAlign:"center",height:"50px",borderBottom:"1px solid #ccc"}}>
                    <Icon type="left" style={{flex:"1",lineHeight:"50px"}}/>
                    <p style={{flex:"3",margin:"0px",lineHeight:"50px"}}>购物车</p>
                    <span style={{flex:"1",lineHeight:"50px"}}>编辑全部</span>
                    {/* <span style={{flex:"1",lineHeight:"50px"}}>完成</span> */}
                </div>

                <ul style={{padding:"0",margin:"0",listStyle:"none"}}>
                    {
                        this.props.goodslist.map((item,index)=>{
                            return  <li style={{padding:"0",margin:"0",listStyle:"none"}} key={index}>
    
                            <div style={{ 
                                paddingLeft: '10px', 
                                marginTop: "10px",
                                paddingRight: "10px",
                                overflow: "hidden",
                                background: "#f7f7f7",
                                display:"flex"
                                }}>
                                <div style={{flex:"1"}}>
                                    <Checkbox/>
                                    <img
                                    style={{display:"inlineBlock",width:"87px",height:"87px",marginLeft:"2px"}}
                                    src={item.img} alt="" />
                                </div>
                                <div style={{
                                    flex:"2"
                                }}>
                                    <div>{item.title}</div>
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <div>
                                            <del>￥{item.price}</del><br/>
                                            <strong style={{
                                                fontSize: "20px",
                                                color:"red",
                                                marginRight:"10px"
                                            }}>￥{item.price}</strong>
                                        </div>
                                        <div className="pricer_sub_add" 
                                            style={{width:"150px",height:"50px",padding:"10px 0 0 20px"}}
                                        >
                                            <InputNumber min={1} max={10} defaultValue={1}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        })
                    }
                </ul>

                <div className="cart_settlement" 
                style={{
                    display:"flex",
                    textAlign:"center",
                    width:"100%",
                    height:"50px",
                    borderTop:"1px solid #ccc",
                    position:"fixed",
                    left:"0px",
                    bottom:"46px"
                }}>
                    <Checkbox style={{flex:"1",lineHeight:"50px"}}>全选</Checkbox>
                    {/* <div style={{
                            flex:"1",textAlign:"center",
                            lineHeight:"50px",
                            background:"#fb0a84",
                            color:"#fff"
                            }}>删除</div> */}
                    <div style={{flex:"2",display:"flex"}}>
                        <div style={{flex:"1"}}>
                            <p style={{margin:"0"}}>合计：<em style={{color:"red"}}>￥1200.00</em></p>
                            <span style={{color:"#ccc"}}>不含运费</span>
                        </div>
                        <div style={{
                            flex:"1",textAlign:"center",
                            lineHeight:"50px",
                            background:"#fb0a84",
                            color:"#fff"
                            }}
                            >去结算</div>
                    </div>

                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        goodslist:state.cart.goodslist,
    }
}
Cart = connect(mapStateToProps)(Cart)
export default Cart;