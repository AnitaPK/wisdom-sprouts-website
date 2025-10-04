import HeaderSection from './courseDetails/HeaderSection'

export default function CourseDetailPage({ course }) {

  if (!course) {
    return <div className="p-6">Course not found!</div>;
  }

  return (
    <>
    <HeaderSection />
      <div className="p-8 max-w-3xl mx-auto">
      <img src={course.img} alt={course.title} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <p className="mt-4 font-medium">{course.students}+ students enrolled</p>
    </div>
    </>
    
  );
}
