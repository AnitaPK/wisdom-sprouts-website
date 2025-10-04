"use client";
import React from 'react'
import HeaderIntership from './HeaderIntership'
import '@/styles/globals.css'
import Eligibility from './Eligibility'
import SkillCardGrid from './SkillCardGrid'
import ProgramHighLights from './ProgramHighLights'
import './InternshipPage.css'
import Journey from './Journey/Journey'
import WhyInternship from './WhyInternship'
import FormIntership from './FormIntership'
import ITCareerSection from './ITCareerSection'
import { useRef } from 'react'

const Intership = () => {

  const formRef = useRef(null); // 👈 create reference

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeaderIntership onApplyClick={scrollToForm}/>
      <Eligibility />
      <SkillCardGrid />
      <ProgramHighLights />
      <Journey />
      <WhyInternship />
      <div ref={formRef}>
        <FormIntership />
      </div>
      <ITCareerSection />
    </>
  )
}

export default Intership
