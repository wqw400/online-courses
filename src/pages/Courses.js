import React from "react";

const courses = [
  {
    id: 1,
    title: "Основы интернет-безопасности",
    description: "Научитесь распознавать мошеннические схемы в сети и защищать себя.",
    lessons: 8,
    video: "videos/IMG_5090.mp4",
  },
  {
    id: 2,
    title: "Фишинг и соцсети",
    description: "Как не попасться на уловки мошенников в социальных сетях и почте.",
    lessons: 6,
    video: "/videos/phishing.mp4",
  },
  {
    id: 3,
    title: "Онлайн-платежи и финансовая безопасность",
    description: "Безопасные методы оплаты и защита ваших данных.",
    lessons: 5,
    video: "/videos/online_payments.mp4",
  },
];

function Courses() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Курсы по борьбе с мошенничеством</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Кол-во уроков: {course.lessons}
            </p>

            {course.video && (
              <video
                controls
                className="w-full rounded-lg mb-4"
                src={course.video}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
