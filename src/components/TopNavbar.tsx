import React, { useState } from 'react';
import {
  Menu,
  Search,
  Receipt,
  Video,
  FileCheck,
  Sun,
  Moon,
  Bell,
  X,
  GraduationCap,
  UserCircle,
} from 'lucide-react';

interface TopNavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
  onNavigate: (view: string) => void;
  onNavigateHome: () => void;
  profileImage: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  onLogout,
  onNavigate,
  onNavigateHome,
  profileImage,
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const searchResults = [
    { icon: Receipt, label: 'Emitir Boleto' },
    { icon: Video, label: 'Aulas Gravadas' },
    { icon: FileCheck, label: 'Atestado de Matrícula' },
  ].filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 shrink-0 transition-colors">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
          >
            <Menu size={24} />
          </button>

          <button
            onClick={onNavigateHome}
            className="hidden md:flex items-center gap-3 mr-4 hover:opacity-80 transition-opacity"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4 L 16 12 L 8 20"
                stroke="#A3C613"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="h-6 w-px bg-gray-300 dark:bg-zinc-700"></div>
            <div className="text-purple-600 dark:text-purple-500">
              <svg
                width="28"
                height="28"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 45 V 70 C 35 85 45 95 60 95 C 75 95 85 85 85 70 V 45"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45 30 L 60 40 L 75 30"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={onNavigateHome}
            className="md:hidden flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-purple-600 dark:text-purple-500">
              <svg
                width="28"
                height="28"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 45 V 70 C 35 85 45 95 60 95 C 75 95 85 85 85 70 V 45"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45 30 L 60 40 L 75 30"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <div className="flex-1 max-w-2xl hidden sm:block relative mx-auto">
            <div className="relative group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(e.target.value.length > 0);
                }}
                onFocus={() => setIsSearchOpen(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                placeholder="Pesquisar aulas, serviços, documentos..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full text-sm focus:bg-white dark:focus:bg-zinc-900 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-50 dark:focus:ring-purple-900/20 outline-none transition-all dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {isSearchOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result, idx) => (
                      <li key={idx}>
                        <button className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-zinc-700 text-left transition-colors">
                          <result.icon size={18} className="text-gray-400 dark:text-gray-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {result.label}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Nenhum resultado encontrado.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="relative p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-zinc-900"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              onBlur={() => setTimeout(() => setIsProfileOpen(false), 200)}
              className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-gray-200 dark:border-zinc-800 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  Jefherson
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  ADS • 3º Semestre
                </p>
              </div>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Perfil"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-100 dark:ring-purple-900/50"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <UserCircle className="w-9 h-9 text-zinc-400" />
              )}
            </button>

            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 overflow-hidden z-50">
                <div className="p-4 border-b border-gray-100 dark:border-zinc-700 sm:hidden">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Jefherson Luiz</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ADS • 3º Semestre</p>
                </div>
                <ul className="py-2">
                  <li>
                    <button
                      onClick={() => onNavigate('meus-dados')}
                      className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      Meus Dados
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('meus-documentos')}
                      className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      Meus Documentos
                    </button>
                  </li>
                  <li>
                    <button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                      Meus Pagamentos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('notificacoes')}
                      className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      Configurar Notificações
                    </button>
                  </li>
                  <li>
                    <button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                      Ajuda
                    </button>
                  </li>
                  <li className="border-t border-gray-100 dark:border-zinc-700 mt-2 pt-2">
                    <button
                      onClick={onLogout}
                      className="w-full px-4 py-2 text-sm text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors"
                    >
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {isNotificationsOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setIsNotificationsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-zinc-900 shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Notificações</h2>
              <button
                onClick={() => setIsNotificationsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800/30">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded-lg text-purple-600 dark:text-purple-300 shrink-0">
                    <Video size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      Link da aula on-line publicado
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      O link para a aula de Interação Humano Computador já está disponível.
                    </p>
                    <p className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 mt-2">
                      Há 1d
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-4 border border-gray-100 dark:border-zinc-700">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      Bolsa integral no Programa Autodidata!
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Confira o edital e veja se você se qualifica para a bolsa integral.
                    </p>
                    <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">
                      Há 17d
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;
