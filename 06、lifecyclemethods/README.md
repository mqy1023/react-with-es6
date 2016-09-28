## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888 <br/>
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Components组件生命周期

* 1、componentWillMount在rendering渲染前执行，在服务端和客户端都会被执行
* 2、componentDidMount在客户端第一次render渲染后被执行，通知组件已经加载完成，虚拟DOM已构建完成，
可以在该函数中Ajax请求、修改DOM、setTimeout或setInterval，还可更新state触发组件中其他生命周期方法.
```javascript
this.props.fetchAirports();
```
* 3、componentWillReceiveProps，当props属性更改时，此方法是第一个被调用，
* 4、shouldComponentUpdate：接受新props或state时调用，返回值true/false决定是否更新视图
```javascript
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.id !== this.props.id;
}
```
* 5、componentWillUpdate，在rendering渲染方法前被调用
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
* 6、componentDidUpdate，在在rendering渲染方法后被调用
* 7、componentWillUnmount，组件从DOM节点中被卸载unmounted时被调用

### 组件生命周期例子分析

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
