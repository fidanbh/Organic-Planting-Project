import React from 'react'
import TopNav from '../TopNav/TopNav'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

const Header = () => {
  return (
    <div>
        <TopNav/>
        <Navbar/>
        <Search/>
    </div>
  )
}

export default Header