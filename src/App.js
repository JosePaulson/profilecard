import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
// import Interests from './Interests'
// import Footer from './Footer'

export default function App () {
    return (
        <div className='container'>
            <Info />
            <About heading='About' />
            <About heading='Interests' />
            <Footer />
        </div>
    )
}