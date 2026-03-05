import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-gray-100 dark:border-zinc-800 pt-4">
      <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400 space-x-2">
        <a
          href="https://www.ulife.com.br/Controls/RequestFile.aspx?id=17"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 dark:hover:text-purple-400 underline-offset-2 hover:underline"
        >
          Termos de Uso
        </a>
        <span>•</span>
        <a
          href="https://www.ulife.com.br/politica-de-privacidade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 dark:hover:text-purple-400 underline-offset-2 hover:underline"
        >
          Política de Privacidade
        </a>
        <span>•</span>
        <span>
          © {year} Ânima Educação - Ânima Educação • V 1.4.1
        </span>
      </p>
    </footer>
  );
};

export default Footer;

