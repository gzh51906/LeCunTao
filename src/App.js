import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Tabs, Menu, Icon } from "antd";
import "./App.css";

// 引入底部导航栏菜单
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Classify from "./pages/Classify";
import Mine from "./pages/Mine";

// const { TabPane } = Tabs;

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
          icon: "search",
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

  componentWillMount() {
    // console.log(this.props);
    let key = this.props.location.pathname;
    // console.log("key", key);
    // 重定向默认高亮不生效
    if (key !== "/") {
      this.setState({
        current: key
      });
    }
  }
  componentWillReceiveProps() {
    // // 获取url地址
    let { pathname } = this.props.history.location;
    console.log(pathname)
    // 把url地址赋值到state中
    this.setState({
      current: pathname
    });
  }

  goto = ({ key }) => {
    // console.log({key})
    this.setState({
      current: key
    });
    // 获取history
    this.props.history.push(key);
    // this.props.history.replace(key)
    // console.log(this.props)
  };

  render(){
    return (
      <div className="App">
        <Menu
          className="menu"
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
