# React 学习笔记

## . 函数组件

直接使用函数参数默认值

```jsx
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```

##  类组件

使用类静态属性声明默认值，`static defaultProps = {}`

```jsx
class List extends Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <div>
        此处展示props的默认值：{this.props.pageSize}
      </div>
    )
  }
}
<List />
```

## 生命周期 - 概述

`目标任务:`  能够说出组件生命周期一共几个阶段

组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程，注意，只有类组件才有生命周期（类组件 实例化  函数组件 不需要实例化）



![img](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490712545-6bd28fa7-290b-48fb-8d51-bbf5578dad3f.png)



http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



## 生命周期 - 挂载阶段

`目标任务:`  能够说出在组件挂载阶段执行的钩子函数和执行时机



![img](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png)

| 钩子 函数         | 触发时机                                            | 作用                                                         |
| ----------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| constructor       | 创建组件时，最先执行，初始化的时候只执行一次        | 1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发                                | 渲染UI（**注意： 不能在里面调用setState()** ）               |
| componentDidMount | 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次 | 1. 发送网络请求  2.DOM操作                                   |



## 生命周期 - 更新阶段

`目标任务:`  能够说出组件的更新阶段的钩子函数以及执行时机



![img](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490742583-b933202d-3de7-41ae-b9ba-75ae1d2af34c.png)

| 钩子函数           | 触发时机                  | 作用                                                         |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| render             | 每次组件渲染都会触发      | 渲染UI（与 挂载阶段 是同一个render）                         |
| componentDidUpdate | 组件更新后（DOM渲染完毕） | DOM操作，可以获取到更新后的DOM内容，**不要直接调用setState** |



## 生命周期 - 卸载阶段

`目标任务:`  能够说出组件的销毁阶段的钩子函数以及执行时机

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |

## 代码

```jsx
import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = {
    count: 1,
  };
  add = () => {
    console.log("add");
    let count = this.state.count + 1;
    this.setState({
      count: count,
    });
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <p> count is : {this.state.count}</p>
        <h2 onClick={this.add}>2021</h2>
        {this.state.count % 2 != 1 ? <MyCom /> : ""}
      </div>
    );
  }
}

class MyCom extends React.Component {
  constructor(name, age) {
    super();

    console.log("constructor");
  }
  state = {
    name: "zc",
    count: 1,
  };
  showName = () => {
    // alert(`you name is ${this.name}    age is ${this.age}`);

    this.setState({
      name: "zcc",
    });
    console.log("change name");
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.showName}> 我是按钮 {this.state.name}</button>
      </div>
    );
  }
  // 组件卸载阶段

  componentWillUnmount() {
    console.log("componentWillUnmount", "组件卸载");
  }
}


```

