import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Form from './components/Home_page/Form.jsx'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Form/>
      <Footer/>
    </>
    
  )
}

export default Layout
