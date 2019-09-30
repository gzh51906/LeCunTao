import React, { Component } from 'react'
import './index.css';
import { Icon } from 'antd';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            data:[
                {
                    srcUrl:require('../../assets/img/icon_index_leliuji.jpg'),
                    name:'乐6集'
                },
                {
                    srcUrl:require('../../assets/img/icon_index_leliuji.jpg'),
                    name:'特色馆'
                },
                {
                    srcUrl:require('../../assets/img/icon_index_lexianyu.jpg'),
                    name:'乐农县'
                },
                {
                    srcUrl:require('../../assets/img/iconFupin.jpg'),
                    name:'电商扶贫'
                },
                {
                    srcUrl:require('../../assets/img/icon_fp_icon.jpg'),
                    name:'广东优品'
                }
            ]
        }

    }
    render() {
        return (
            <div>
                <header id="head">
                    <div className="sel-city">
                        <Icon className="icon-left" type="thunderbolt"></Icon>
                        <span>太原市</span>
                        <Icon className="icon-right" type="right"></Icon>
                    </div>
                    <div className="search-wrap" >
                        <div className="head-search">
                            <Icon className="icon-search" type="search"></Icon>
                            <span>搜索您需要的商品</span>
                        </div>
                    </div>
                </header>
                <div className="swiper-wrapper">
                    <img src={require('./banner.png')} />
                </div>
                <div className="swiper-container2">
                    <ul>
                    {
                            this.state.data.map((item)=>{
                                console.log(item);
                                
                                return <li key={item.name} >{
                                    <div>
                                        <img src={item.srcUrl}/>
                                        <p>{item.name}</p>
                                    </div>
                                }</li>
                            })
                        }
                    </ul>
                </div>
                <div className="leliuji">
                    <img src={require('../../assets/img/imgLe6Ji.png')} />
                </div>
                <div className="llj">
                    <img src={require('../../assets/img/lct_wap_llj.jpg')} />
                </div>
                <div className="swiper-container-horizontal">
                    <ul>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        <li>
                            <div className="listall">
                                <img src={require('../../assets/img/imgLe6J1i.png')} alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="leliuji">
                    <img src={require('../../assets/img/icon_teseguan.png')} />
                </div>
                <div className="llj">
                    <img src={require('../../assets/img/lct_wap_tsg.jpg')} />
                </div>
                <div className="swiper-container-horizontal">
                    <ul>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={require('../../assets/img/3739_05663083155368436_360.png')} alt=""/>
                            </div>
                            <span className="txt_span">
                                【农民节】全新  升级版芍药美肌补水6件超大套盒
                            </span>
                            <p className="txt_price">
                                ￥99.00
                            </p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default Home;