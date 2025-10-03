import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
          >
            Войти
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500 dark:text-gray-400">
            Нет аккаунта?{" "}
            <a href="/register" className="text-indigo-600 dark:text-yellow-400 font-semibold hover:underline">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
