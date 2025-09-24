import React from 'react'
import Section1 from './section1/Section1'
import Section2 from './section2/section2'
import '@/styles/globals.css'
import './PlacementPage.css'
import HiringPartner from './HiringPartner'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'



const PlacementPage = ({alumni}) => {
  return (
    <>
      <Section1 />
      <Section2 alumni={alumni}/>
      <HiringPartner />
      <Section3 />
      <Section4 />
    </>
  )
}

export default PlacementPage
