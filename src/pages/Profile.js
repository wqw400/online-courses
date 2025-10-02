import React from "react";

function Profile() {
  // Для примера данные пользователя (потом можно брать из API или localStorage)
  const user = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    avatar: "https://i.pravatar.cc/150?img=3", // случайная аватарка
    coursesCompleted: 5,
    totalCourses: 12,
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      {/* Шапка профиля */}
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>

      {/* Прогресс */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ваш прогресс</h2>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div
            className="bg-indigo-500 h-4 rounded-full"
            style={{
              width: `${(user.coursesCompleted / user.totalCourses) * 100}%`,
            }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Пройдено {user.coursesCompleted} из {user.totalCourses} курсов
        </p>
      </div>

      {/* Кнопка выхода */}
      <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition">
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
