import React from 'react'

function Article() {

    const posts = [
        {
            id: 1,
            title: "This is heading one",
            msg: "this is a paragraph"
        },
        {
            id: 2,
            title: "This is heading Two",
            msg: "this is a paragraph"
        },
        {
            id: 3,
            title: "This is heading Three",
            msg: "this is a paragraph"
        },
        {
            id: 4,
            title: "This is heading Four",
            msg: "this is a paragraph"
        },
        {
            id: 5,
            title: "This is heading Five",
            msg: "this is a paragraph"
        },
    ]

    const list = posts.map(post => <div className='post' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.msg}</p>
    </div>)
    return (
        <div className='article'>
            {list}
        </div>
    )
}

export default Article