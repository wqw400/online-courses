import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-6 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <p>© 2025 Безопасный интернет. Все права защищены.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">Telegram</a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">VK</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">YouTube</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
