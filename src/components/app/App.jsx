import React from 'react';
import Header from '../header';
import BodyPosts from '../body-posts';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <BodyPosts />
            </div>
        )
    }
}

export default hot(module)(App)
