import React from 'react'
import CoursesList from './CoursesList'

const CoursesPage = ({AllCourses}) => {
  return (
    <>
      <CoursesList AllCourses={AllCourses} />
    </>
  )
}

export default CoursesPage
