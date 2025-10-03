import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Войти</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition"
          >
            Войти
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Нет аккаунта?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
