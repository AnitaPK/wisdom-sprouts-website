import React from 'react'
import Header from '@/components/Home/Header'
import Image from 'next/image';
import features from "../data/HomePageCard";
import courseCategories from '../data/CourseCategories'
import WSCardSection from '@/components/Home/WSCardSection/WSCardSection'
import '../styles/globals.css'
import HomePage from '@/components/Home/HomePage';

const  page = async() => {

  return (

    <>
      <Header />
      <div className='about-us-container '>
        <img src='/Frame 427320760.png' alt="" className='custom-image-play'/>
      </div>
      <WSCardSection features={features}/>
      <HomePage courseCategories={courseCategories}/>
    </>
  )
}

export default page