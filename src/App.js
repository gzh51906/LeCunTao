import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Tabs } from "antd";
import './App.css';

// 引入底部导航栏菜单
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Classify from "./pages/Classify";
import Mine from "./pages/Mine";

const { TabPane } = Tabs;

class App extends Component {
  state = {
    tabPosition: "top",
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
        text: "个人中心",
        name: "mine",
        icon: "user",
        path: "/mine"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>

        <Switch>
          {/* 首页 */}

          <Route path="/home" component={Home} />

          {/* 分类 */}

          <Route path="/classify" component={Classify} />

          {/* 购物车 */}

          <Route path="/cart" component={Cart} />

          {/* 个人中心 */}

          <Route path="/mine" component={Mine} />
        </Switch>
      </div>
    );
  }
}

export default App;
