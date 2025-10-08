import React from 'react'
import CoursesList from './CoursesList'
import HeaderCourse from './HeaderCourse'

const CoursesPage = ({AllCourses}) => {
  return (
    <>
    <HeaderCourse />
      <CoursesList AllCourses={AllCourses} />
    </>
  )
}

export default CoursesPage
