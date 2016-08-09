## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Components组件介绍

### 无状态组件(Stateless Components)
参考**StatelessApp.jsx** <br/>
然后将StatelessApp.jsx引入(import)到main.js文件并调用reactDOM.render()

### 状态组件(Stateful Components)

【注意】给组件`key`属性，当改变代码后，帮助`React`仅更新渲染更改部分而不是全部重新渲染，这对性能有很大的提升

### 函数声明组件(Function Components)

函数式组件与基于`Class`声明的组件相比，其具有以下特性:

* 不需要声明类，可以避免大量的譬如`extends`或者`constructor`这样的代码
* 不需要显示声明`this`关键字，在ES6的类声明中往往需要将函数的`this`关键字绑定到当前作用域，而因为函数式声明的特性，我们不需要再强制绑定:
```javascript
onClick={this.sayHi.bind(this)}>Say Hi</a>
onClick={sayHi}>Say Hi</a>
```
* 贯彻最佳实践，在`React`组件复用与组合中我们会提到，应当避免在底层的展示性组件中混入对于状态的管理，而应该将状态托管于某个高阶组件或者其他的状态容器中。利用函数式声明组件可以彻底保证不会在组件中进行状态操作。
* 易于理解与测试
* 更佳的性能表现:因为函数式组件中并不需要进行生命周期的管理与状态管理，因此`React`并不需要进行某些特定的检查或者内存分配，从而保证了更好地性能表现。
