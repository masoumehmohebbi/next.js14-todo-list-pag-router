import React from 'react'
import Header from '@/containers/Layout/Header'
import Footer from '@/containers/Layout/Footer'


const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout