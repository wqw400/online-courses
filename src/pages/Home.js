import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero секция */}
      <div className="relative bg-indigo-600 dark:bg-indigo-700 text-white">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/64922_original.jpg"
            alt="Безопасность в интернете"
            className="w-full h-64 lg:h-96 object-cover opacity-30 pointer-events-none"
          />
        </div>

        {/* Контент поверх картинки */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Добро пожаловать в «Безопасный интернет»
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Научись защищать себя и близких от мошенников в интернете.
          </p>

          {/* Кнопка с иконкой */}
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-xl text-lg transition-transform transform hover:scale-105 hover:shadow-lg mt-4"
          >
            Перейти к курсам
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Под hero секцией */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Почему стоит учиться у нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Актуальные курсы</h3>
            <p>Все материалы обновляются под современные схемы мошенничества.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Практическая польза</h3>
            <p>Вы научитесь защищать свои данные и деньги прямо сейчас.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold mb-2">Бесплатные ресурсы</h3>
            <p>Доступ к статьям, видео и инструкциям по безопасности в интернете.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
