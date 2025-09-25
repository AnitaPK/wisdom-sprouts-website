import React from 'react'
import HeaderIntership from './HeaderIntership'
import '@/styles/globals.css'
import Eligibility from './Eligibility'
import SkillCardGrid from './SkillCardGrid'
import ProgramHighLights from './ProgramHighLights'
import './Intership.css'
import Journ from './Journey/Journey'
import WhyInternship from './WhyInternship'
import FormIntership from './FormIntership'
import ITCareerSection from './ITCareerSection'

const Intership = () => {
  return (
    <>
      <HeaderIntership />
      <Eligibility />
      <SkillCardGrid />
      <ProgramHighLights />
      <Journ />
      <WhyInternship />
      <FormIntership />
      <ITCareerSection />
    </>
  )
}

export default Intership
