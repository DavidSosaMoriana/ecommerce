import React from 'react'
import Head from 'next/head'

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="main-container">
        
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout