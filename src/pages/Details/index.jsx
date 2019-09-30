import React, { Component } from 'react'
import { PageHeader ,Icon , Drawer , InputNumber,Spin} from 'antd'
import axios from 'axios'
import './index.css'
import store from '../../redux/store.js'
import {connect} from "react-redux";

class Detail extends Component {

    state = { 
        visible: false, 
        placement: 'bottom' ,
        goods:{},
        val:'',
        loading:true
    };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    
    add_to_cart=()=>{
        let obj = this.state.goods
        store.dispatch({type:'ADD_TO_CART',payload:obj})
        console.log(this.props.goodslist)
        
    }

    gocart(){
        this.props.history.push('/cart')
    }
    componentDidMount() {
        console.log(store)
        let shangpinId = this.props.match.params.id
        axios.get('http://www.doclever.cn:8090/mock/5d878cbd4a9da91cd6535fe9/detail').then((data)=>{
            let goodslist = data.data.data.obj
            // console.log('data',goodslist)
            let Selection = goodslist.filter(item=>{
                    if(item.id == shangpinId)   return item
                    
            })
            console.log('Selection',Selection)
            this.setState({
                goods:Selection[0],
                loading:false
            })
        })

    }
    render() {
        console.log('goods',this.state.goods)
        
        
        let {goods} = this.state
        return (
            <div>
                <Spin spinning={this.state.loading}>
                <div className="goodsmarket_top">
                    <PageHeader onBack={() => this.props.history.go(-1)} title="商品详情" />
                    <div style={{width:"100%",height:'33px'}}></div>
                    <div>
                        <img style={{display:'inlineBlock',width:'100%',heigth:'300px !important'}} src={goods.img} alt=""/>
                    </div>
                    
                    <div className="desgoods">
                        <div className="desgoods_title">{goods.title}</div>
                        <span className="desgoods_tit">{goods.title}</span>
                        <div className="desgoods_price">
                            <strong>￥{goods.price}</strong>
                            <del>{goods.price}</del>
                        </div>
                        <div className="prod-freight"><span>运费：</span> <span>送至山西省太原市 0.00元</span></div>
                    </div>
                    <div className="space-line"></div>
                    <div className="prod-spec" onClick={this.showDrawer}>
                        <div>
                            <span className="spec-desc">请选择</span>  
                            <span className="part-note-msg">1个</span> 
                        </div>
                        <Icon type="right" style={{lineHeight:"4"}}/>
                    </div>
                    <div className="space-line"></div>
                    <div className="space-line"></div>
                    <div className="space-line"></div>

                    <div className="prod-shop">
                        <div className="shoppic">
                            <img src="https://img.lecuntao.com/data/upload/shop/store/05074121585968029.png" alt=""/>
                        </div> 
                        <div className="shop-con">
                            <div className="shopname">海尔乐家旗舰店</div> 
                            <div className="shopaddress">
                                <span>所在地:</span>山西省太原市杏花岭区
                            </div>
                        </div>
                    </div>

                    <Drawer
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        height={300}
                        destroyOnClose={true}
                        >
                        <div className="popup-shop">
                            <img src={this.state.goods.img} alt="" />
                            <div>
                                <span className="popup-price" style={{color:"red",fontSize:"20px",fontWeight:"700"}}>
                                    <em>¥</em>{goods.price}</span>
                                    <Icon onClick={this.onClose} type="close" style={{color:"red",position:"absolute",right:"5px",top:"5px",border:"1px solid #ccc"}} /><br/>
                                <span className="popup-stock">库存200件</span> <br/>
                                <span className="popup-cont" style={{color:"#333"}}>
                                    <em>已选：</em>
                                    {goods.title}
                                </span>
                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                            <span>已选择数量:</span>
                            <InputNumber min={1} max={10} defaultValue={1}   />

                        </div>
                        <div className="goodsmarket_btn" style={{width:"100%",position:"absolute",bottom:"0px",left:"0px"}}>
                            <div className="goodsmarket_num" style={{display:"flex",marginBottom:"10px"}}>
                                <span style={{flex:"1",textAlign:"center"}}>最小起定量 1 套</span>
                                <span style={{flex:"1",textAlign:"center"}}>
                                    <em style={{color:"red"}}>已选 <i style={{color:"black"}}>1</i> 件</em>
                                    <em style={{padding:"0px 10px"}}>|</em>
                                    <em style={{color:"red"}}> 6980.00元</em>
                                </span>

                            </div>
                            <div className="addtocart" style={{display:"flex"}}>
                                <p style={{flex:"1",textAlign:"center",height:"50px",lineHeight:"50px",margin:"0",color:"#fff",background:"orange"}}>加入购物车</p>
                                <p style={{flex:"1",textAlign:"center",height:"50px",lineHeight:"50px",margin:"0",color:"#fff",background:"red"}}>立即购买</p>
                            </div>
                        </div>
                    </Drawer>

                    <div className="goodsmarket_footer" style={{display:"flex",position:"fixed",bottom:"0px",left:"0px",width:"100%",borderTop:"1px solid #ccc"}}>
                        <div className="fl" style={{flex:"1",display:"flex",background:"#fff"}}>
                            <p style={{flex:"1",margin:"0",textAlign:"center"}}>
                            <Icon type="bank"/>
                            <span style={{display:"block"}}>店铺</span>
                            </p>
                            <p style={{flex:"1",margin:"0",textAlign:"center"}}>
                            <Icon type="shopping-cart" />
                            <span style={{display:"block"}}
                            onClick={this.gocart.bind(this)}
                            >购物车</span>
                            </p>
                        </div>
                        <div className="fr" style={{flex:"2",display:"flex"}}>
                            <p style={{flex:"1",textAlign:"center",height:"50px",lineHeight:"50px",margin:"0",color:"#fff",background:"orange"}}
                            
                                onClick={this.add_to_cart}
                            >加入购物车</p>
                            <p style={{flex:"1",textAlign:"center",height:"50px",lineHeight:"50px",margin:"0",color:"#fff",background:"red"}}
                                onClick={this.buy}
                            >立即购买</p>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:'102px',background:'#ccc',textAlign:'center',lineHeight:'52px'}}>已经到底啦！</div>
                </Spin>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        goodslist:state.cart.goodslist,
    }
}
Detail = connect(mapStateToProps)(Detail)
export default Detail;