import React from 'react'
import CommentsPage from 'components/CommentsPage'

const comments = [
    { name: 'Vlad', 
        comment: 'Wow, nice post!', 
        avatar: 'https://img.icons8.com/carbon-copy/2x/user.png' },
    { name: 'Victor', 
        comment: 'Zaebumba', 
        avatar: 'https://img.icons8.com/carbon-copy/2x/user.png' },
    { name: 'Max', 
        comment: 'Good', 
        avatar: 'https://img.icons8.com/carbon-copy/2x/user.png' },
    { name: 'Yura', 
        comment: ')', 
        avatar: 'https://img.icons8.com/carbon-copy/2x/user.png' },
    { name: 'Olya', 
        comment: 'Love Yura', 
        avatar: 'https://img.icons8.com/carbon-copy/2x/user.png' }
]

export default () => (
    <CommentsPage comments={comments}/> 
)