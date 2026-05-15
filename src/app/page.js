import React from 'react'
import Home from './home/page'
import Navbar from '../components/NavBar'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhyChoose from '@/components/WhyChoose'
import TeamCarousel from '@/components/TeamCarousel'
import Experience from '@/components/Experience'
import LogoSlider from '@/components/LogoSlider'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import FAQSection from '@/components/FAQSectionServices'

const page = () => {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Home />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Experience />
      <TeamCarousel />
      {/* <LogoSlider /> */}
      <Testimonials />
      {/* <Blog /> */}
      <CTA />
      <FAQSection />
      {/* <FAQ /> */}
      <Newsletter />
    </div>
  )
}

export default page