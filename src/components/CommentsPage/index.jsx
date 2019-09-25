import React from 'react'
import './styles.css'
import CommentPreview from '../CommentPreview';


export default ({ comments }) => (
    <div className='comments-page'>
        {
            comments.map((comment, i) =>
                <CommentPreview
                    key={i}
                    name={comment.name}
                    avatar={comment.avatar}
                    comment={comment.comment}
                />
            )
        }
    </div>
)