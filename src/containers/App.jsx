import React from 'react';
import Header from 'containers/Header';
import UserPanel from 'components/user-panel';
import PostPage from 'containers/PostPage';
import CommentsPage from 'containers/CommentsPage'
import { HashRouter as Router, Route, Redirect } from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="page-wrapper">
                        <div className="page">
                            <Route path="/posts" component={PostPage} />
                            <Route path="/comments" component={CommentsPage} />
                            <Route path="/" exact component={() => <Redirect to="/posts"/>} />
                        </div>
                        <UserPanel/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default hot(module)(App)
