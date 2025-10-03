import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.h1
            className="text-4xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Добро пожаловать в «Безопасный интернет»
          </motion.h1>

          <motion.p
            className="text-lg lg:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Защищай себя и близких от мошенников онлайн.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-xl text-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Перейти к курсам
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.img
          src="/images/64922_original.jpg"
          alt="Безопасность в интернете"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, yoyo: true }}
        />
      </div>

      {/* Преимущества */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Почему стоит учиться у нас
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Актуальные курсы",
              description: "Материалы обновляются под современные схемы мошенничества.",
            },
            {
              title: "Практическая польза",
              description: "Вы научитесь защищать свои данные и деньги прямо сейчас.",
            },
            {
              title: "Бесплатные ресурсы",
              description: "Доступ к статьям, видео и инструкциям по безопасности.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
