import React from 'react'
import PostPage from 'components/PostPage'

const posts = [
    { title: 'My first post', 
        text: 'lorem ipsum...', 
        commentsCount: 20, 
        img: "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock-200x200.jpg" },
    { title: 'My 2 post', 
        text: 'lorem ipsum...', 
        commentsCount: 20, 
        img: "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock-200x200.jpg" },  
    { title: 'My 3 post', 
        text: 'lorem ipsum...', 
        commentsCount: 20, 
        img: "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock-200x200.jpg" },  
    { title: 'My 4 post', 
        text: 'lorem ipsum...', 
        commentsCount: 20, 
        img: "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock-200x200.jpg" },  
    { title: 'My 5 post', 
        text: 'lorem ipsum...', 
        commentsCount: 20, 
        img: "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock-200x200.jpg" },  
]

export default () => (
    <PostPage posts={posts}/>
  
)