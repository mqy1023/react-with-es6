## 启动步骤
* 1、npm install
* 2、npm start，然后可以在浏览器中打开localhost:8888 <br/>
或者npm run prod，然后可以到dist目录下打开index.html <br/>
或者直接webpack,然后可以到dist目录下打开index.html

## React Refs

**1、App.jsx**  <br />
ref相当于元素一个引用，一般仅在需要DOM操作或添加方法到组件的情况下使用.

如例子中，将ref = "myInput"的DOM节点focus聚焦

#### kindsOfRefs
refs的两种使用方式，建议使用`ref={ node => this.refsA = node }`

#### 是否是最外一层组件的findDOMNode两种方式

* findDOMNode1
* findDOMNode2
