import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Menu, Icon , BackTop  } from "antd";
import "./App.css";



// 引入底部导航栏菜单
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Classify from "./pages/Classify";
import Mine from "./pages/Mine";
// 引入其他页面
import List from "./pages/List";
import Detail from "./pages/Details";
import Login from "./pages/login";
import Reg from "./pages/reg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabPosition: "bottom",
      current: "/home",
      menu: [
        {
          text: "首页",
          name: "home",
          icon: "home",
          path: "/home"
        },
        {
          text: "分类",
          name: "classify",
          icon: "appstore",
          path: "/classify"
        },
        {
          text: "购物车",
          name: "cart",
          icon: "shopping-cart",
          path: "/cart"
        },
        {
          text: "我的",
          name: "mine",
          icon: "user",
          path: "/mine"
        }
      ]
    };
  }

  
  componentDidMount(){
    let key = this.props.location.pathname;
    console.log("key", key);
    // 重定向默认高亮不生效
    if (key !== "/") {
      this.setState({
        current: key
      });
    }
    let menu = document.querySelector('#menu')
    
      if(key === '/home' || key === '/classify' || key === '/cart' || key === '/mine') {
        menu.style.display = 'block';
      }else{
        menu.style.display = 'none';
    }
  }
  componentWillReceiveProps() {
    // // 获取url地址
    let { pathname } = this.props.history.location;
    console.log('pathname',pathname)
    // 把url地址赋值到state中
    this.setState({
      current: pathname
    });
    let menu = document.querySelector('#menu')
        if(pathname === '/home' || pathname === '/classify' || pathname === '/cart' || pathname === '/mine') {
          menu.style.display = 'block';
        }else{
          menu.style.display = 'none';
        }
  }
  // 底部导航栏跳转
  goto = ({ key }) => { 
    this.props.history.push(key);
  };

  render(){
    let token = localStorage.getItem('authorization')
    console.log('token',token)
    return (
      <div className="App">
        <BackTop>
          <div className="ant-back-top-inner"
              style={{
                height: '40px',
                width: '40px',
                lineHeight: '40px',
                borderRadius: '20px',
                backgroundColor: '#1088e9',
                color:'#fff',
                textAlign: 'center',
                fontSize: '20px'
              }}
          ><Icon type="arrow-up" /></div>
        </BackTop>
        
        <Menu
          id="menu"
          onClick={this.goto}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {this.state.menu.map(item => {
            return (
              <Menu.Item key={item.path}>
                <Icon type={item.icon} />
                {item.text}
              </Menu.Item>
            );
          })}
        </Menu>
          

        <Switch>
          {/* 首页 */}

          <Route path="/home" component={Home} />

          {/* 分类 */}

          <Route path="/classify" component={Classify} />

          {/* 购物车 */}

          <Route path="/cart" component={Cart} />

          {/* 个人中心 */}

          <Route path="/mine" component={Mine} />

          {/* 列表页 */}

          <Route path="/list" component={List} />

          {/* 详情页 */}

          <Route path="/detail/:id" component={Detail} />

          {/* 登录页 */}

          <Route path="/login" component={Login} />

          {/* 注册页 */}

          <Route path="/reg" component={Reg} />

          
          {/* 重定向加精准确定到home界面 */}

          <Redirect from="/" to="/home" exact />

          {/* 404页面，一定要写在最后面 */}
          <Route
            path="/notfound"
            render={() => (
              <div>
                找不到页面呀！<strong>404</strong>
              </div>
            )}
          ></Route>

          {/* 找不到组件页面，返回404页面 */}
          <Redirect from="*" to="/notfound" />
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
