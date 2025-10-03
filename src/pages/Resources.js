import React from "react";

const resources = [
  {
    title: "Федеральная служба по финансовому мониторингу",
    link: "https://www.cbr.ru/",
  },
  {
    title: "Киберполиция России",
    link: "https://xn--b1aapghj5a.xn--p1ai/",
  },
  {
    title: "Центр безопасного интернета",
    link: "https://www.safe-internet.ru/",
  },
];

function Resources() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Ресурсы для защиты от мошенничества</h1>
      <ul className="space-y-4">
        {resources.map((res, idx) => (
          <li key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
            <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-yellow-400 font-semibold hover:underline">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
