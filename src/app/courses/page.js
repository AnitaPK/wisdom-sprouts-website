import CoursesPage from '@/components/courses/CoursesPage'
import React from 'react'
import categories from '../../data/CourseCategories'


const page = () => {
  return (
    <>
      <CoursesPage AllCourses={categories} />
    </>
  )
}

export default page
