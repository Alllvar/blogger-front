import React from 'react';
import Comments from '../comments'
import UserPanel from '../user-panel'
import './body-comments.css'

const BodyComments = () => {
    return (
        <div className="body-comments">
           <Comments />
           <UserPanel />
        </div>
    )
}
export default BodyComments;