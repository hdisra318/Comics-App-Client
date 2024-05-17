import React from 'react'
import { Outlet } from 'react-router-dom'

/* Components */
import { Header, Footer } from '../components'; 

function Layout() {


    return (
        <div className='bg-red-900 h-screen'>
            <Header />


            <main className='container mx-auto'>
                <Outlet />
            </main>


            <Footer />
        
        </div>
    )
}

export default Layout