import React from 'react'
import Banner from './Banner'
import Banner2 from './Banner2'
import Contents from './Contents'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Contents/>
      <Banner2/>
      <Footer/>
        
    </div>
  )
}

export default Home