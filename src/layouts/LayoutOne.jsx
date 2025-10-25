import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import ResNavbar from '../components/ResNavbar'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
    <NavBar/>
    <ResNavbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default LayoutOne