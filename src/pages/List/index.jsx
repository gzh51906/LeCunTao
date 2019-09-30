import React, { Component } from 'react';
import { PageHeader, Tabs , List , Card ,Spin} from 'antd';
import axios from 'axios'
import LazyLoad from 'react-lazyload';
import './index.css'
const { TabPane } = Tabs;


class Lists extends Component {
    constructor(props){
        super(props);
        this.state={
            goods:'',
            loading:true
        }

        // let  goodlis = this.state.goods.map((item,index)=>item.id=index)
    }

    componentDidMount() {
        axios.get('http://www.doclever.cn:8090/mock/5d878cbd4a9da91cd6535fe9/list').then((data)=>{
            console.log(data)
            let goodslist = data.data.obj
            let  goodlis = goodslist.map((item,index)=>{
                item.id=index
                return item
            })
            
            this.setState({
                goods:goodlis,
                loading:false
            })
        })
    }

    


    // 点击跳转详情页
    goto = (id)=>{
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        console.log(this.state)
        // console.log('1212',this.state.goods)
        // onClick={this.props.history.push('/detail')}
        let {goods} = this.state
        return (
            <div>
                <PageHeader onBack={() => this.props.history.go(-1)} title="干货" />
                <div style={{background:'yellow',width:'100%',height:'75px'}}></div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="全部" key="1">
                    <Spin spinning={this.state.loading}>
                        <LazyLoad height={200} once offset={100}>
                            <List
                                grid={{ gutter: 16, column: 2 }}
                                dataSource={goods}
                                renderItem={item => (
                                <List.Item onClick={this.goto.bind(this,item.id)}>
                                    <Card>
                                        <img src={item.img} alt=""/>
                                        <span>{item.title}</span>
                                        <div className="decprice">
                                            <em>￥{item.price}</em>
                                            <span>{item.person}</span>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                        </LazyLoad>
                    </Spin>
                    </TabPane>
                    <TabPane tab="销量优先" key="2">
                    <Spin spinning={this.state.loading}>
                        <LazyLoad height={200} once offset={100}>
                            <List
                                grid={{ gutter: 16, column: 2 }}
                                dataSource={goods}
                                renderItem={item => (
                                <List.Item onClick={this.goto.bind(this,item.id)}>
                                    <Card>
                                        <img src={item.img} alt=""/>
                                        <span>{item.title}</span>
                                        <div className="decprice">
                                            <em>￥{item.price}</em>
                                            <span>{item.person}</span>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                        </LazyLoad>
                    </Spin>
                    </TabPane>
                    <TabPane tab="价格" key="3" >
                    <Spin spinning={this.state.loading}>
                        <LazyLoad height={200} once offset={100}>
                            <List
                                grid={{ gutter: 16, column: 2 }}
                                dataSource={goods}
                                renderItem={item => (
                                <List.Item onClick={this.goto.bind(this,item.id)}>
                                    <Card>
                                        <img src={item.img} alt=""/>
                                        <span>{item.title}</span>
                                        <div className="decprice">
                                            <em>￥{item.price}</em>
                                            <span>{item.person}</span>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                        </LazyLoad>
                    </Spin>
                    </TabPane>
                    <TabPane tab="人气" key="4">
                    <Spin spinning={this.state.loading}>
                        <LazyLoad height={200} once offset={100}>
                            <List
                                grid={{ gutter: 16, column: 2 }}
                                dataSource={goods}
                                renderItem={item => (
                                <List.Item onClick={this.goto.bind(this,item.id)}>
                                    <Card>
                                        <img src={item.img} alt=""/>
                                        <span>{item.title}</span>
                                        <div className="decprice">
                                            <em>￥{item.price}</em>
                                            <span>{item.person}</span>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                        </LazyLoad>
                    </Spin>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default Lists;