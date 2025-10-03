import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero секция */}
      <div className="relative bg-indigo-600 dark:bg-indigo-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center relative z-10">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Добро пожаловать в «Безопасный интернет»
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Научись защищать себя и близких от мошенников в интернете.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-xl text-lg transition-transform transform hover:scale-105 hover:shadow-lg mt-4"
            >
              Перейти к курсам
              <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
            </Link>
          </motion.div>
        </div>

        {/* Фоновое изображение */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/images/64922_original.jpg"
            alt="Безопасность в интернете"
            className="w-full h-64 lg:h-96 object-cover opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>

      {/* Преимущества */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Почему стоит учиться у нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Актуальные курсы",
              text: "Все материалы обновляются под современные схемы мошенничества.",
            },
            {
              title: "Практическая польза",
              text: "Вы научитесь защищать свои данные и деньги прямо сейчас.",
            },
            {
              title: "Бесплатные ресурсы",
              text: "Доступ к статьям, видео и инструкциям по безопасности в интернете.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 }}
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
