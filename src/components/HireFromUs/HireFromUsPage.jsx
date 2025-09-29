import React from 'react'
import '@/styles/globals.css'
import Header from './HeaderHire'
import WhyHireUs from './WhyFromUs'
import TalentPool from './TalentPool'
import HiringPaths from './HiringPaths'
import TestimonialCarousel from './TestimonialCarousel'
import JourneyCarousel from './JourneyCarousel'

const HireFromUs = () => {
  return (
    <section>
      <Header />
      <WhyHireUs />
      <TalentPool />
      <HiringPaths />
      <TestimonialCarousel />
      <JourneyCarousel />
    </section>
  )
}

export default HireFromUs
