import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'
import Works from './components/Works'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Location from './components/Location'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Hero />
      <About />
      <Service />
      <Works />
      <Reviews />
      <Location />
      <Contact />

      <Footer />
    </div>
  )
}
