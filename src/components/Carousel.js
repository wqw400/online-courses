import CourseCard from "./CourseCard";

export default function Carousel({ courses }) {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}
