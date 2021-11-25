import React from 'react'
import Footer from '../widgets/footer/Footer'
import Navbar from '../widgets/navbar/Navbar'

const NavComponent = ({children}) => {
    return (
        <>
         <section style={{display:'flex', justifyContent:'space-between', height:'100vh', flexDirection:'column'}}>
            <Navbar/>
            {children}
            <Footer/>     
        </section>   
        </>
    )
}

export default NavComponent
