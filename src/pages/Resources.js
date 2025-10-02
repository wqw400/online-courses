import React from "react";

const resources = [
  {
    id: 1,
    title: "Мошеловка.рф — Народный фронт против мошенничества",
    type: "Платформа для сообщений о мошенничестве",
    link: "https://moshelovka.onf.ru/",
    description: "Принимайте участие в борьбе с мошенниками, сообщая о подозрительных схемах и получая рекомендации по безопасности.",
  },
  {
    id: 2,
    title: "Антимошенник.рф — Образовательный портал",
    type: "Обучающий портал",
    link: "https://xn----ctbkfiannhdagd7cxf1e.xn--p1ai/",
    description: "Повышайте свою осведомлённость о современных методах мошенничества и обучайтесь методам защиты от них.",
  },
  {
    id: 3,
    title: "Финкульт — Как распознать фишинг",
    type: "Статья",
    link: "https://fincult.info/article/fishing-chto-eto-takoe-i-kak-ot-nego-zashchititsya/",
    description: "Простое объяснение, что такое фишинг, чем опасны поддельные сайты и как распознать фишинговые ссылки от мошенников.",
  },
  {
    id: 4,
    title: "Горячая линия по борьбе с мошенниками в Москве",
    type: "Горячая линия",
    link: "https://sam.mos.ru/",
    description: "Бесплатный проект, который научит распознавать мошенников и их схемы, а также расскажет об эффективных методах защиты.",
  },
  {
    id: 5,
    title: "Госуслуги — Кибербезопасность",
    type: "Официальная информация",
    link: "https://www.gosuslugi.ru/cybersecurity",
    description: "Ресурс с рекомендациями по защите от мошенников и информации о том, куда обращаться в случае столкновения с мошенничеством.",
  },
  {
    id: 6,
    title: "Роскомнадзор — Куда обращаться при мошенничестве в интернете",
    type: "Официальная информация",
    link: "https://rocit.ru/knowledge_base/kuda-obrashhatsya-esli-stolknulis-s-moshennichestvom-v-internete/",
    description: "Руководство по действиям при столкновении с интернет-мошенничеством и информация о том, куда обращаться за помощью.",
  },
];

function Resources() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Полезные ресурсы</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <div
            key={res.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{res.type}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-2 text-center bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"
            >
              Перейти к ресурсу
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
