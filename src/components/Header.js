import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="bg-indigo-600 text-white shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-bold hover:text-indigo-200 transition">
          Безопасный интернет
        </Link>

        {/* Навигация */}
        <nav className="flex space-x-4">
          <Link
            to="/courses"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Курсы
          </Link>
          <Link
            to="/resources"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Ресурсы
          </Link>
          <Link
            to="/profile"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Профиль
          </Link>
          <Link
            to="/login"
            className="px-3 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Войти
          </Link>
          <Link
            to="/register"
            className="px-3 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Регистрация
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
