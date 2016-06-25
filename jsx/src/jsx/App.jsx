import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
                <p data-myattribute = "somevalue">This is the content have attribute!!!</p>
            </div>
        );
    }
}

export default App;