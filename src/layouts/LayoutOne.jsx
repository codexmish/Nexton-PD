import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

const LayoutOne = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne