import React from 'react'
import '@/styles/globals.css'
import Header from './HeaderHire'
import WhyHireUs from './WhyFromUs'
import TalentPool from './TalentPool'
import HiringPaths from './HiringPaths'
import TestimonialCarousel from './TestimonialCarousel'

const HireFromUs = () => {
  return (
    <section>
      <Header />
      <WhyHireUs />
      <TalentPool />
      <HiringPaths />
      <TestimonialCarousel />
    </section>
  )
}

export default HireFromUs
