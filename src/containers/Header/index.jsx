import React from 'react';
import Header from 'components/Header'


const routing = [
    { label: 'Posts', to: '/posts' },
    { label: 'Comments', to: '/comments' },
]

export default () => (
    <Header links={routing} />
)
