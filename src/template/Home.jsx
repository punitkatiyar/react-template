import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import Aside from './Aside'
function Home() {
    return (
        <>
            <Header />
            <Nav />



            <div className='mid'>
                <Article />
                <Aside />



            </div>


            <div className='footer'>
                footer
            </div>
        </>

    )
}
export default Home