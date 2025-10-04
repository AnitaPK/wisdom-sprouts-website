import React from 'react'
import {coursesList}  from "../../../data/CoursesDetails";
import CourseDetailPage from '@/components/courses/CourseDetailsPage';


 const page = async({params}) => {
    console.log(coursesList)
    console.log(params.id)
    const { id } = await params;
  const course = coursesList.find((c) => c.id === Number(id));
  
 if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div>
      <CourseDetailPage course={course} />
    </div>
  )
}

export default page
