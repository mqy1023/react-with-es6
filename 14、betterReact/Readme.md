
## 更好方式编写React

#### 一、MapApp中无状态组件

#### 二、Children
遍历父组件的子组件，使用React.Children.map()替代this.props.children.map()【因为只有一个子组件时,this.props.children为一个对象而非数组】
