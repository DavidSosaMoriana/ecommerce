import React from 'react'
import Head from 'next/head'

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Store</title>
      </Head>
      <header>
        <NavBar /> 
      </header>
    </div>
  )
}

export default Layout