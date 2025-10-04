import CoursesPage from '@/components/courses/CoursesPage'
import React from 'react'
import {coursesList} from '../../data/CoursesDetails'


const page = () => {
  return (
    <>
      <CoursesPage AllCourses={coursesList} />
    </>
  )
}

export default page
