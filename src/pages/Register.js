import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Регистрация</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Имя" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700" />
          <input type="password" placeholder="Пароль" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700" />
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg transition-transform transform hover:scale-105">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
