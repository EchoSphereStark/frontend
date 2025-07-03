import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from './components/HeroSection'
import Podcast from './components/Podcast'
import Bottom from './components/Bottom'
import Footer from '@/components/Footer'


export default function index() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Podcast />
      <Bottom/>
      <Footer/>
    </main>
  )
}
