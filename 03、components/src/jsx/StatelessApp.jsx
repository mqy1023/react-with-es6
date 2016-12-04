import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

const Header = () => <h1>Header</h1>

const Content = () => <h2>Content</h2>

export default App;
