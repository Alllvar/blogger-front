import React from 'react';
import Header from '../header';
import Comments from '../comments';

class CommentsPage extends React.Component {
    render() {
        return (
            <div className="comments-page">
                <Header />
                <Comments />
            </div>
        )
    }
}

export default hot(module)(CommentsPage)