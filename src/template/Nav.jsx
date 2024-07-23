import React from 'react'

function Nav() {

    const navs = ['home', 'page 1', 'page 2', 'page 3', 'page 4', 'page 5'];

    const list = navs.map(nav => <li key={nav}><a href="./">{nav}</a></li>);
    return (
        <div className='nav'>
            <ul>
                {/* <li><a href="./">Home</a></li>
                <li><a href="./">Page 1</a></li>
                <li><a href="./">Page 2</a></li>
                <li><a href="./">Page 3</a></li>
                <li><a href="./">Page 4</a></li>
                <li><a href="./">Page 5</a></li> */}

                {list}
            </ul>

        </div>
    )
}

export default Nav