import React from 'react'
import StatsSection from './stats/StatsSection'
import Header from './Header'
import PopularCourses from './courses/PopularCourses'
import FreeConsultation from './freeConsultation/FreeConsultation'
import NewsletterHero from './NewsLetterHero'
import TestimonialCarouselHome from './testimonial/TestimonialCorouselHome'
import CoursesComponent from './courses/CourseCategoryTab'

const HomePage = ({courseCategories}) => {
  return (
    <>
      {/* <PopularCourses /> */}
      <CoursesComponent categories={courseCategories} />
      <StatsSection />
      <TestimonialCarouselHome />
      <FreeConsultation />
      <NewsletterHero />
    </>
  )
}

export default HomePage
