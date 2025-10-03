import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <Link
          to="/"
          className="text-2xl font-bold hover:text-indigo-200 transition-colors duration-300"
        >
          Безопасный интернет
        </Link>

        {/* Навигация */}
        <nav className="flex space-x-4 items-center">
          <Link
            to="/courses"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300"
          >
            Курсы
          </Link>
          <Link
            to="/resources"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300"
          >
            Ресурсы
          </Link>
          <Link
            to="/profile"
            className="px-3 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300"
          >
            Профиль
          </Link>

          {/* Кнопки входа и регистрации */}
          <Link
            to="/login"
            className="px-3 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Войти
          </Link>
          <Link
            to="/register"
            className="px-3 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300"
          >
            Регистрация
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
