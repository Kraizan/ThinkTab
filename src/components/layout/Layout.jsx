import React from 'react'
import Navbar from '@/components/commons/Navbar'
import Footer from '@/components/commons/Footer'

const Layout = ({ children }) => {
  return (
    <div className="py-16 h-screen">
      <Navbar />
      <div className="flex h-full my-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout