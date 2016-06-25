import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id = "myDiv">NODE</div>
            </div>
        );
    }
}

export default App;