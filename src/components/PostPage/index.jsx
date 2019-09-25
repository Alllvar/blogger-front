import React from 'react'
import './styles.css'
import PostPreview from 'components/PostPreview'


export default ({ posts }) => (
    <div className='post-page'>
        {
            posts.map((post, i) =>
                <PostPreview
                    key={i}
                    title={post.title}
                    img={post.img}
                    text={post.text}
                    commentsCount={post.commentsCount}
                />
            )
        }
    </div>
)