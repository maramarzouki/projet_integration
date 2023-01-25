import React from 'react'
import Blogs from './Blogs'
import Discover from './Discover'
import Header from './Header'
import Intro from './Intro'
import Services from './Services'

function Home() {
  return (
    <div className='Home'>
        <Header/>
        <br />

        <Intro/>
        <Discover/>
        <Blogs/>
        <Services/>
    </div>
  )
}

export default Home