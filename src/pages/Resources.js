import React from "react";
import { motion } from "framer-motion";

const resources = [
  { id: 1, title: "Статья по интернет-безопасности", link: "https://www.cnews.ru/news" },
  { id: 2, title: "Форум по защите данных", link: "https://habr.com/ru/" },
  { id: 3, title: "Видео-инструкции", link: "https://www.youtube.com/" },
];

function Resources() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Полезные ресурсы</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <motion.a
            key={res.id}
            href={res.link}
            target="_blank"
            className="block bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {res.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Resources;
