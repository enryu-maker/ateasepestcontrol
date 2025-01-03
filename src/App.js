import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'
import Works from './components/Works'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Hero from './components/Hero'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Works />
      <Reviews />
      <Footer />
    </div>
  )
}
