## 启动步骤
* 1、npm install
* 2、npm start, 然后可以在浏览器中打开localhost:8888.
或者npm run prod,然后可以到dist目录下打开index.html.看package.json中对应的该命令

## React Components组件生命周期

#### 一、初始化及挂载阶段
* 1、这是组件类的构造函数，通常在此初始化state数据模型。
```javascript
constructor(props) {
  super(props);
  this.state = {
    //key : value
  };
}
```
* 2、componentWillMount在rendering渲染前执行，在服务端和客户端都会被执行
```javascript
componentWillMount() {

}
```
* 3、componentDidMount在客户端第一次render渲染后被执行，通知组件已经加载完成，虚拟DOM已构建完成，
可以在该函数中Ajax请求、修改DOM、setTimeout或setInterval，还可更新state触发组件中其他生命周期方法.
```javascript
componentDidMount() {
  this.props.fetchAirports();
}
```
#### 二、运行期阶段
* 1、componentWillReceiveProps, 通常在此方法接收新的props值,重新设置state.
```javascript
componentWillReceiveProps(nextProps) {
  this.setState({
    //key : value
  });
}
```
* 2、shouldComponentUpdate：接受新props或state时调用; 如果该方法返回false，则componentWillUpdate(nextProps, nextState)及其之后执行的方法都不会执行，组件则不会进行重新渲染。
```javascript
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.id !== this.props.id;
}
```
* 3、componentWillUpdate，在shouldComponentUpdate返回true后立刻调用,rendering渲染方法前被调用
```javascript
componentWillUpdate(nextProps, nextState){
    let originAndDestinationSelected = nextProps.origin && nextProps.destination;
    let selectionHasChangedSinceLastUpdate = nextProps.origin !== this.props.origin ||
                                             nextProps.destination !== this.props.destination;
    if(originAndDestinationSelected && selectionHasChangedSinceLastUpdate){
      this.props.fetchTickets(nextProps.origin, nextProps.destination);
    }
  }
```
* 4、componentDidUpdate，在在render()渲染方法后被调用
* **5、render方法用于渲染组件。在初始化阶段和运行期阶段都会执行**
```javascript
render() {
  return(
    <View/>
  );
}
```
### 三、卸载阶段
* 1、componentWillUnmount,组件从DOM节点中被卸载unmounted时被调用,一般用于clearInterval等
 ```javascript
 componentWillUnmount() {

 }
 ```

## 组件生命周期例子分析
![组件生命周期](./images/lifecycle.png)

* 1、组件渲染成功，会调用componentWillMount和componentDidMount

* 2、每点击一次**INCREMENT**按钮，更改props属性值，都会调用以下三个方法打印出：
```bash
Component WILL RECIEVE PROPS!
Component WILL UPDATE!
Component DID UPDATE!
```
* 3、十秒后卸载组件,调用unmout打印出：
```bash
Component WILL UNMOUNT!
```

## 更多链接
[React入门笔记(二) — 组件的生命周期](http://blog.csdn.net/mqy1023/article/details/51571320)
