import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Footer />
    </div>
  )
}

export default App