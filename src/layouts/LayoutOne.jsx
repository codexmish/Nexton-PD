import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import ResNavbar from '../components/ResNavbar'

const LayoutOne = () => {
  return (
    <>
    <NavBar/>
    <ResNavbar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne