import React from 'react'

function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.msg}</p>
            {props.children}

        </div>
    )
}

export default Post