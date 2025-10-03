import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Основы интернет-безопасности",
    description: "Научитесь распознавать мошеннические схемы и защищать себя.",
    lessons: 8,
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 2,
    title: "Фишинг и соцсети",
    description: "Как не попасться на уловки мошенников в соцсетях и почте.",
    lessons: 6,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "Онлайн-платежи",
    description: "Безопасные методы оплаты и защита ваших данных.",
    lessons: 5,
    video: "https://www.youtube.com/shorts/8uMUiUPvfMk",
  },
];

function Courses() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Курсы по борьбе с мошенничеством</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:shadow-xl transition relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Кол-во уроков: {course.lessons}
            </p>

            {course.video && (
              <motion.video
                controls
                className="w-full rounded-lg mb-4"
                src={course.video}
                whileHover={{ scale: 1.02 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
