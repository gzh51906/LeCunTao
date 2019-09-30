import React, { Component } from 'react'
import { Tabs, Select, Input } from 'antd';
import "../Classify.css";
import Fuzhuang from "../components/Fuzhuang";
const { Search } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
// const { TabPane } = Tabs;
class Classify extends Component {
    constructor() {
        super();
        this.state = {
            tabPosition: 'left',
            List: [
                {
                    name: 'nongchanpin',
                    province: '农作/产品',
                    dd: []
                },
                {
                    name: 'wuzi',
                    province: '农用/物资'
                },
                {
                    name: 'tongxun',
                    province: '通讯/办公'

                },
                {
                    name: 'huazhuang',
                    province: '个护/化妆'

                },
                {
                    name: 'jiaju',
                    province: '家具/建材'
                },
                {
                    name: 'fuzhuang',
                    province: '服装/饰品'
                },
                {
                    name: 'xiemao',
                    province: '鞋帽/箱包'
                },
                {
                    name: 'muying',
                    province: '母婴/玩具'
                },
                {
                    name: 'lvyou',
                    province: '旅游/房产'
                },
                {
                    name: 'shenghuo',
                    province: '生活/服务'
                },
                {
                    name: 'yingyang',
                    province: '营养/保健'
                }
            ]
        }


    }





    changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
    };

    render() {
        function callback(key) {
            console.log(key);
        }
        return (
            <div>
                <div className='bb'>
                    <Input placeholder="输入商品名称" />
                    <span className="ant-input-suffix">取消</span>
                </div>
                <div className='route'>
                    {this.state.List.map(item => {
                        //     return  <Tabs tabPosition={this.state.tabPosition} key={item.name}>
                        //     <TabPane tab={item.province} key={item.name}>
                        //         {item.name}
                        //     </TabPane>
                        // </Tabs>


                    })}
                    <Tabs onChange={callback} type="card" tabPosition={this.state.tabPosition}>
                        <TabPane tab="农作/产品" key="1">
                        
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1096.png" alt="" />
                                <h2>
                                    <a href="#" id="1096">干货</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1097.png" alt="" />
                                <h2>
                                    <a href="#" id="1097">蔬菜</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1098.png" alt="" />
                                <h2>
                                    <a href="#" id="1098">水果</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1099.png" alt="" />
                                <h2>
                                    <a href="#" id="1099">副食</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1118.png" alt="" />
                                <h2>
                                    <a href="#" id="1118">其他</a>
                                </h2>
                            </li>
                           
                        </TabPane>
                        <TabPane tab="农用/物资" key="2">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1065.png" alt="" />
                                <h2>
                                    <a href="#" id="1065">农业化肥</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1090.png" alt="" />
                                <h2>
                                    <a href="#" id="1090">农机</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1100.png" alt="" />
                                <h2>
                                    <a href="#" id="1100">农药</a>
                                </h2>
                            </li>
                        </TabPane>
                        <TabPane tab="通讯/办公" key="3">
                        <li>
                            <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_471.png" alt="" />
                            <h2>
                                <a href="#" id="471">手机通讯</a>
                            </h2>
                        </li>
                        
                        <li>
                            <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_472.png" alt="" />
                            <h2>
                                <a href="#" id="472">手机配件</a>
                            </h2>
                        </li>
                        
                        <li>
                            <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_473.png" alt="" />
                            <h2>
                                <a href="#" id="473">外设产品</a>
                            </h2>
                        </li>
                        
                        <li >
                            <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1092.png" alt="" />
                            <h2>
                                <a href="#" id="1092">办公用品</a>
                            </h2>
                        </li>
                        
                        <li>
                            <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_474.png" alt="" />
                            <h2>
                                <a href="#" id="474">网络产品</a>
                            </h2>
                        </li>
                        </TabPane>
                        <TabPane tab="个护/化妆" key="4">
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_663.png" alt="" />
                                <h2>
                                    <a href="#" id="663">面部护肤</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_664.png" alt="" />
                                <h2>
                                    <a href="#" id="664">洗发护发</a>
                                </h2>
                            </li>
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_665.png" alt="" />
                                <h2>
                                    <a href="#" id="665">身体护肤</a>
                                </h2>
                            </li>
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_666.png" alt="" />
                                <h2>
                                    <a href="#" id="666">口腔护理</a>
                                </h2>
                            </li>
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_667.png" alt="" />
                                <h2>
                                    <a href="#" id="667">女性护理</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_668.png" alt="" />
                                <h2>
                                    <a href="#" id="668">香水彩妆</a>
                                </h2>
                            </li>           
                        </TabPane>
                            <TabPane tab="家具/建材" key="5">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_152.png" alt="" />
                                <h2>
                                    <a href="#" id="152">餐饮厨具</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1105.png" alt="" />
                                <h2>
                                    <a href="#" id="1105">居家日用</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1057.png" alt="" />
                                <h2>
                                    <a href="#" id="1057">收纳整理</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_155.png" alt="" />
                                <h2>
                                    <a href="#" id="155">家具灯具</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1077.png" alt="" />
                                <h2>
                                    <a href="#" id="1077">洗护清洁</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_151.png" alt="" />
                                <h2>
                                    <a href="#" id="151">家装软饰</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_154.png" alt="" />
                                <h2>
                                    <a href="#" id="154">家纺</a>
                                </h2>
                            </li>
                        </TabPane>
                            <TabPane tab="服装/饰品" key="6">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_201.png" alt="" />
                                <h2>
                                    <a href="#" id="201">女装系列</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_200.png" alt="" />
                                <h2>
                                    <a href="#" id="200">男装系列</a>
                                </h2>
                            </li>                           
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_202.png" alt="" />
                                <h2>
                                    <a href="#" id="202">内衣系列</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_203.png" alt="" />
                                <h2>
                                    <a href="#" id="203">服饰配件</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_204.png" alt="" />
                                <h2>
                                    <a href="#" id="204">珠宝首饰</a>
                                </h2>
                            </li>       
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1121.png" alt="" />
                                <h2>
                                    <a href="#" id="1121">礼品</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_205.png" alt="" />
                                <h2>
                                    <a href="#" id="205">钟表</a>
                                </h2>
                            </li>
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1119.png" alt="" />
                                <h2>
                                    <a href="#" id="1119">服装店用具</a>
                                </h2>
                            </li>
                        </TabPane>
                            <TabPane tab="鞋帽/箱包" key="7">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1062.png" alt="" />
                                <h2>
                                    <a href="#" id="1062">流行男鞋</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1073.png" alt="" />
                                <h2>
                                    <a href="#" id="1073">精品男包</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1093.png" alt="" />
                                <h2>
                                    <a href="#" id="1093">休闲鞋类</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1113.png" alt="" />
                                <h2>
                                    <a href="#" id="1113">帽子</a>
                                </h2>
                            </li>
                        </TabPane>
                            <TabPane tab="母婴/玩具" key="8">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_5.png" alt="" />
                                <h2>
                                    <a href="#" id="5">尿裤湿巾</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_6.png" alt="" />
                                <h2>
                                    <a href="#" id="6">喂养用品</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_7.png" alt="" />
                                <h2>
                                    <a href="#" id="7">洗护用品</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_11.png" alt="" />
                                <h2>
                                    <a href="#" id="11">童装童鞋</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1075.png" alt="" />
                                <h2>
                                    <a href="#" id="1075">妈妈专区</a>
                                </h2>
                            </li>
                            
                            <li on>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1076.png" alt="" />
                                <h2>
                                    <a href="#" id="1076">玩具乐器</a>
                                </h2>
                            </li>
                                    
                        </TabPane>
                            <TabPane tab="旅游/房产" key="9">
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1079.png" alt="" />
                                <h2>
                                    <a href="#" id="1079">旅游团购</a>
                                </h2>
                            </li>
                        </TabPane>
                            <TabPane tab="生活/服务" key="10">
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1102.png" alt="" />
                                <h2>
                                    <a href="#" id="1102">农业</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_532.png" alt="" />
                                <h2>
                                    <a href="#" id="532">数字音乐</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_534.png" alt="" />
                                <h2>
                                    <a href="#" id="534">文艺</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1084.png" alt="" />
                                <h2>
                                    <a href="#" id="1084">经管励志</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1085.png" alt="" />
                                <h2>
                                    <a href="#" id="1085">生活</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1086.png" alt="" />
                                <h2>
                                    <a href="#" id="1086">科技</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1087.png" alt="" />
                                <h2>
                                    <a href="#" id="1087">少儿</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1088.png" alt="" />
                                <h2>
                                    <a href="#" id="1088">教育</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1089.png" alt="" />
                                <h2>
                                    <a href="#" id="1089">手工艺品</a>
                                </h2>
                            </li>
                            
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_535.png" alt="" />
                                <h2>
                                    <a href="#" id="535">人文社科</a>
                                </h2>
                            </li>
                            
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1122.png" alt="" />
                                <h2>
                                    <a href="#" id="1122">宠物</a>
                                </h2>
                            </li>
                        </TabPane>
                            <TabPane tab="营养/保健" key="11">
                            <li >
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_309.png" alt="" />
                                <h2>
                                    <a href="#" id="309">营养食品</a>
                                </h2>
                            </li>
                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_311.png" alt="" />
                                <h2>
                                    <a href="#" id="311">传统滋补</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_312.png" alt="" />
                                <h2>
                                    <a href="#" id="312">成人用品</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_313.png" alt="" />
                                <h2>
                                    <a href="#" id="313">保健器械</a>
                                </h2>
                            </li>

                            <li>
                                <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/category/cate_1078.png" alt="" />
                                <h2>
                                    <a href="#" id="1078">急救卫生</a>
                                </h2>
                            </li>
                        </TabPane>
                        
                  </Tabs>
                        <div style={{ marginBottom: 16 }}>

                        </div>
                </div>
                </div>
                )
            }
        }
        export default Classify;
        
