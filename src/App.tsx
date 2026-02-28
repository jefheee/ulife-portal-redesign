import React, { useState, useEffect } from 'react';
import {
  Home,
  BookOpen,
  Calendar,
  GraduationCap,
  DollarSign,
  Briefcase,
  Search,
  Bell,
  PlayCircle,
  Clock,
  Play,
  FileText,
  CheckSquare,
  FileCheck,
  Receipt,
  Menu,
  MoreHorizontal,
  Moon,
  Sun,
  AlertCircle,
  Video,
  HelpCircle,
  Users,
  User,
  Plus,
  X,
  Pencil,
  UserCircle
} from 'lucide-react';

// --- LOGIN & AUTH SCREENS ---

const LoginScreen = ({ onLogin, onRecoverPassword }: { onLogin: (username: string) => void, onRecoverPassword: () => void }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação Rigorosa: SOMENTE números, no mínimo 5 dígitos
    const isValid = /^\d{5,}$/.test(username.trim());
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
      onLogin(username.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <h1 className="text-2xl font-light text-gray-700 tracking-wide">
          Ecossistema <span className="font-semibold text-purple-700">Ânima</span>
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center text-purple-600">
            <svg width="64" height="64" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 45 V 70 C 35 85 45 95 60 95 C 75 95 85 85 85 70 V 45" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M45 30 L 60 40 L 75 30" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          Ulife
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 font-medium">
          Portal Acadêmico
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Login
              </label>
              {error && (
                <p className="text-red-500 text-sm font-medium mb-1.5">
                  Login não preenchido ou com formato inválido
                </p>
              )}
              <div className="flex rounded-lg shadow-sm">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (error) setError(false);
                  }}
                  className={`flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-l-lg border ${
                    error 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                  } sm:text-sm transition-all focus:outline-none focus:ring-2`}
                  placeholder="Insira seu login"
                />
                <span className="inline-flex items-center px-4 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm font-medium">
                  @ulife.com.br
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#0078D4] hover:bg-[#106EBE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078D4] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0H0V10H10V0Z" fill="#F25022"/>
                  <path d="M21 0H11V10H21V0Z" fill="#7FBA00"/>
                  <path d="M10 11H0V21H10V11Z" fill="#00A4EF"/>
                  <path d="M21 11H11V21H21V11Z" fill="#FFB900"/>
                </svg>
                Entrar com Microsoft
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 font-medium">Links Úteis</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 shadow-sm text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <HelpCircle size={18} className="text-gray-400" />
                Como realizar o acesso
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 shadow-sm text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Users size={18} className="text-gray-400" />
                Acessar Ulife Colaboradores
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-purple-700">Orientações para realizar o acesso</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 text-sm text-gray-600 space-y-4 overflow-y-auto">
              <p>
                Para acessar o sistema, utilize seu RA, CPF ou nome de usuário e a senha. Confira abaixo os formatos de acesso de acordo com cada perfil:
                <br /><br />
                Estudantes Presenciais, Semipresenciais e Live: Utilize seu RA.<br />
                Estudantes do EAD: Utilize seu CPF.<br />
                Docentes: Utilize seu nome de usuário.
                <br /><br />
                Se você não sabe seu login ou esqueceu sua senha, clique no botão cadastrar nova senha logo abaixo. Vamos direcioná-lo para a página de Troca de Senha. Nela, você digita seu CPF e o e-mail com os próximos passos será enviado para seu email pessoal cadastrado no processo de matrícula. Depois, é só voltar aqui na tela de login e acessar sua conta com a nova senha. Se ainda tiver dúvidas, você pode acessar o <a href="https://go.screenpal.com/watch/cTfiIQnjfkm" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">vídeo explicativo</a> sobre como trocar a senha.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-center shrink-0">
              <button 
                onClick={() => { setIsModalOpen(false); onRecoverPassword(); }} 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto shadow-sm"
              >
                CADASTRAR NOVA SENHA
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

const RecuperarSenhaScreen = ({ onBack }: { onBack: () => void }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /^\d{5,}$/.test(inputValue.trim());
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
      setIsSuccessModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <h1 className="text-2xl font-light text-gray-700 tracking-wide">
          Ecossistema <span className="font-semibold text-purple-700">Ânima</span>
        </h1>
      </div>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recuperação de Senha</h2>
          <p className="text-sm text-gray-600 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            Ao utilizar esta função, caso não receba o e-mail de recuperação de senha em um de seus e-mails pessoais, por favor entre em contato com os canais oficiais de atendimento.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="recovery-input" className="block text-sm font-semibold text-gray-700 mb-2">
                Informe seu RA (número de matrícula), login ou cpf: *
              </label>
              {error && (
                <p className="text-red-500 text-sm font-medium mb-1.5">
                  Formato inválido. Digite apenas números (mín. 5 dígitos).
                </p>
              )}
              <input
                id="recovery-input"
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  if (error) setError(false);
                }}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${
                  error 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                }`}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden flex flex-col">
            <div className="bg-emerald-50 p-6 border-b border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                <CheckSquare size={24} className="text-emerald-600" />
                Sucesso
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-600 space-y-4">
              <p>
                Foi enviado um e-mail de recuperação de senha para o(s) email(s) pessoal(is) cadastrado(s) associado(s) ao RA/Login/CPF informado. Caso não tenha recebido o email de recuperação de senha, acione a central de atendimento da sua Instituição através do Whatsapp (link disponível no site da instituição) ou presencialmente.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={onBack} 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MicrosoftSelectionScreen = ({ username, onSelectAccount, onBack, profileImage }: { username: string, onSelectAccount: () => void, onBack: () => void, profileImage: string }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-zinc-900 to-black flex items-center justify-center p-4 font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-[440px] overflow-hidden"
        style={{ animation: 'fadeIn 0.4s ease-out forwards' }}
      >
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">
              Â
            </div>
            <span className="text-gray-600 font-semibold text-sm tracking-tight">Ecossistema Ânima</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">Escolha uma conta</h2>
          
          <div className="space-y-1">
            <button 
              onClick={onSelectAccount}
              className="w-full flex items-center gap-4 p-3 -mx-3 hover:bg-gray-50 transition-colors rounded-lg text-left group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <UserCircle className="w-full h-full text-zinc-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-gray-900 truncate">Jefherson Luiz da Silva</p>
                <p className="text-sm text-gray-500 truncate">{username}@ulife.com.br</p>
                <p className="text-xs text-gray-400 mt-0.5">Entrou</p>
              </div>
            </button>
            
            <div className="border-t border-gray-200 my-3"></div>
            
            <button className="w-full flex items-center gap-4 p-3 -mx-3 hover:bg-gray-50 transition-colors rounded-lg text-left">
              <div className="w-12 h-12 flex items-center justify-center text-gray-500 shrink-0">
                <Plus size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-gray-900 truncate">Use outra conta</p>
              </div>
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-4 flex justify-end border-t border-gray-100">
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors text-sm"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

// --- DASHBOARD SCREENS ---

const Sidebar = ({ currentView, setCurrentView }: { currentView: string, setCurrentView: (view: string) => void }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'ucs', icon: BookOpen, label: 'Minhas UCs' },
    { id: 'schedule', icon: Calendar, label: 'Quadro de Aulas' },
    { id: 'recorded', icon: Video, label: 'Aulas Gravadas' },
    { id: 'grades', icon: GraduationCap, label: 'Notas' },
    { id: 'finance', icon: DollarSign, label: 'Financeiro' },
    { id: 'services', icon: Briefcase, label: 'Serviços' },
  ];

  return (
    <aside className="w-24 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex-col items-center py-6 hidden md:flex shrink-0 transition-colors">
      <nav className="flex flex-col gap-4 w-full px-3">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center justify-center w-full gap-2 py-4 px-2 rounded-xl transition-all ${
                isActive 
                  ? 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 font-semibold' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-medium'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] text-center leading-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

const TopNavbar = ({ isDarkMode, toggleDarkMode, onLogout, onNavigate, onNavigateHome, profileImage }: { isDarkMode: boolean, toggleDarkMode: () => void, onLogout: () => void, onNavigate: (view: string) => void, onNavigateHome: () => void, profileImage: string }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const searchResults = [
    { icon: Receipt, label: 'Emitir Boleto' },
    { icon: Video, label: 'Aulas Gravadas' },
    { icon: FileCheck, label: 'Atestado de Matrícula' },
  ].filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 shrink-0 transition-colors">
        <div className="flex items-center gap-4 flex-1">
          <button className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg">
            <Menu size={24} />
          </button>
          
          <button 
            onClick={onNavigateHome}
            className="hidden md:flex items-center gap-3 mr-4 hover:opacity-80 transition-opacity"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4 L 16 12 L 8 20" stroke="#A3C613" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="h-6 w-px bg-gray-300 dark:bg-zinc-700"></div>
            <div className="text-purple-600 dark:text-purple-500">
              <svg width="28" height="28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 45 V 70 C 35 85 45 95 60 95 C 75 95 85 85 85 70 V 45" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45 30 L 60 40 L 75 30" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <div className="flex-1 max-w-2xl hidden sm:block relative mx-auto">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />
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
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{result.label}</span>
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
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">Jefherson</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">ADS • 3º Semestre</p>
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
                  <li><button onClick={() => onNavigate('meus-dados')} className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">Meus Dados</button></li>
                  <li><button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">Meus Documentos</button></li>
                  <li><button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">Meus Pagamentos</button></li>
                  <li><button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">Configurar Notificações</button></li>
                  <li><button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">Ajuda</button></li>
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

      {/* Slide-over de Notificações */}
      {isNotificationsOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={() => setIsNotificationsOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-zinc-900 shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Notificações</h2>
              <button onClick={() => setIsNotificationsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
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
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">Link da aula on-line publicado</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">O link para a aula de Interação Humano Computador já está disponível.</p>
                    <p className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 mt-2">Há 1d</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-4 border border-gray-100 dark:border-zinc-700">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">Bolsa integral no Programa Autodidata!</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Confira o edital e veja se você se qualifica para a bolsa integral.</p>
                    <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Há 17d</p>
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

const HeroCard = () => {
  const dayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

  const schedule: Record<number, { subject: string, prof: string, time: string, room: string } | null> = {
    0: null,
    1: null,
    2: { subject: "Matemática Computacional Aplicada", prof: "Tamires Cristina", time: "19h00 às 21h50", room: "Sala H - 1º Andar - Pbh219" },
    3: { subject: "Matemática Computacional Aplicada", prof: "Claudio Coelho", time: "19h00 às 21h50", room: "Sala D - Térreo - Pb119d" },
    4: { subject: "Interação Humano Computador e UX", prof: "Fernando Costa", time: "19h00 às 21h50", room: "Laboratório De Inovação Digital I - E2" },
    5: { subject: "Interação Humano Computador e UX", prof: "Armando Cardoso", time: "19h00 às 21h50", room: "Laboratório De Inovação Digital I - E2" },
    6: null
  };

  const todayClass = schedule[dayOfWeek];

  if (!todayClass) {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group transition-colors">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/10 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 bg-gray-50 dark:bg-zinc-900 px-2.5 py-1 rounded-full border border-gray-100 dark:border-zinc-700">
              <Home size={14} className="text-gray-400 dark:text-gray-500" /> Descanso
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Bom descanso!</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Você não tem aulas presenciais hoje. Aproveite para descansar ou colocar atividades em dia!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group transition-colors">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-red-100 dark:border-red-800/50">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            Ao Vivo Agora
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 bg-gray-50 dark:bg-zinc-900 px-2.5 py-1 rounded-full border border-gray-100 dark:border-zinc-700">
            <Clock size={14} className="text-gray-400 dark:text-gray-500" /> Hoje, {todayClass.time}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{todayClass.subject}</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2 flex-wrap">
          Prof. {todayClass.prof} <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full hidden sm:block"></span> <span className="block sm:inline">{todayClass.room}</span>
        </p>
      </div>
      
      <button className="relative z-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all flex items-center gap-2.5 whitespace-nowrap w-full md:w-auto justify-center active:scale-95">
        <PlayCircle size={20} className="animate-pulse" />
        Acessar Aula Ao Vivo
      </button>
    </div>
  );
};

const UrgentTasks = () => {
  const tasks = [
    { title: 'Arquitetura da Informação parte 1', dueDate: 'Hoje às 23:59', subject: 'Interação Humano Computador e UX' },
    { title: 'Atividade Figma', dueDate: 'Hoje às 23:59', subject: 'Interação Humano Computador e UX' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <AlertCircle className="text-orange-500" size={20} />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Prazos Próximos</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-gray-200 dark:border-zinc-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group">
            <div className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
              <FileText size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{task.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{task.subject}</p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-zinc-900 w-fit px-2 py-1 rounded-md">
                <Clock size={12} />
                Vence: {task.dueDate}
              </div>
            </div>
            <button className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-lg transition-colors">
              Fazer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickShortcuts = () => {
  const shortcuts = [
    { icon: Receipt, label: 'Emitir Boleto', color: 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50' },
    { icon: FileCheck, label: 'Atestado de Matrícula', color: 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50' },
    { icon: Calendar, label: 'Calendário Acadêmico', color: 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50' },
    { icon: CheckSquare, label: 'Atividades Complementares', color: 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50' },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Atalhos Rápidos</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {shortcuts.map((shortcut, idx) => (
          <button key={idx} className={`p-4 rounded-xl border transition-colors flex items-center gap-3 text-left group ${shortcut.color}`}>
            <div className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm group-hover:scale-110 transition-transform text-purple-600 dark:text-purple-400">
              <shortcut.icon size={20} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold leading-tight text-gray-700 dark:text-gray-200">{shortcut.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const SubjectsGrid = () => {
  const subjects = [
    {
      name: 'Interação Humano Computador e UX',
      code: 'ADS1AN-PBB1-68615550',
      type: 'Prática (Presencial)',
      progress: 16,
      gradient: 'from-purple-600 to-purple-800',
      color: 'purple'
    },
    {
      name: 'Matemática Computacional Aplicada',
      code: 'ADS1AN-PBB-68612179',
      type: 'Teórica (Presencial)',
      progress: 1,
      gradient: 'from-fuchsia-600 to-purple-700',
      color: 'fuchsia'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Minhas UCs em Andamento</h3>
        <button className="text-sm text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 hover:underline underline-offset-4 transition-all">Ver todas</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {subjects.map((subject, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-md hover:border-purple-100 dark:hover:border-purple-900/50 transition-all group">
            <div className={`h-28 relative bg-gradient-to-br ${subject.gradient} overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10 shadow-sm">
                  {subject.type}
                </span>
                <button className="text-white/80 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1.5 line-clamp-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors" title={subject.name}>
                {subject.name}
              </h4>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-5">{subject.code}</p>
              
              <div className="mt-auto mb-5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progresso</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-1000 ease-out bg-${subject.color}-500`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <Play size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Continuar</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <FileText size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Material</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <CheckSquare size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Avaliações</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">Olá, Jefherson! 👋</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Aqui está o resumo do seu semestre. Você tem uma aula em breve.</p>
        </div>
        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 hidden sm:block">
          {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      </div>

      <HeroCard />
      <UrgentTasks />
      <QuickShortcuts />
      <SubjectsGrid />
    </div>
  );
};

const ScheduleView = () => {
  const days = [
    { name: 'Segunda', date: '23', classes: [] },
    { 
      name: 'Terça', 
      date: '24', 
      classes: [
        { name: 'Matemática Computacional Aplicada', time: '19h00 - 21h50', type: 'Presencial', room: 'Pedra Branca - Sala De Aula - H - 1º Andar - Pbh219', prof: 'Tamires Cristina Costa Louzada' }
      ] 
    },
    { 
      name: 'Quarta', 
      date: '25', 
      classes: [
        { name: 'Matemática Computacional Aplicada', time: '19h00 - 21h50', type: 'Presencial', room: 'Pedra Branca - Sala De Aula - D - Térreo - Pb119d', prof: 'Claudio Coelho' }
      ] 
    },
    { 
      name: 'Quinta', 
      date: '26', 
      classes: [
        { name: 'Interação Humano Computador e UX', time: '19h00 - 21h50', type: 'Presencial', room: 'Pedra Branca - Laboratório De Inovação Digital I - E2 - 1º Andar', prof: 'Fernando Costa' }
      ] 
    },
    { 
      name: 'Sexta', 
      date: '27', 
      isToday: true,
      classes: [
        { name: 'Interação Humano Computador e UX', time: '19h00 - 21h50', type: 'Presencial', room: 'Pedra Branca - Laboratório De Inovação Digital I - E2 - 1º Andar', prof: 'Armando Cardoso' }
      ] 
    },
    { name: 'Sábado', date: '28', classes: [] },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Quadro de Aulas</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Fevereiro 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Semana Anterior
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Próxima Semana
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col h-full">
            <div className={`text-center py-3 rounded-t-xl border-t border-x ${day.isToday ? 'bg-purple-600 border-purple-600 text-white' : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'}`}>
              <p className="text-xs font-bold uppercase tracking-wider">{day.name}</p>
              <p className={`text-xl font-bold ${day.isToday ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{day.date}</p>
            </div>
            <div className={`flex-1 p-3 border-b border-x rounded-b-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 ${day.isToday ? 'border-x-purple-200 border-b-purple-200 dark:border-x-purple-900/50 dark:border-b-purple-900/50 bg-purple-50/30 dark:bg-purple-900/10' : ''}`}>
              {day.classes.length === 0 ? (
                <div className="h-32 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 gap-2">
                  <BookOpen size={24} className="opacity-50" />
                  <span className="text-xs font-medium">(sem aula)</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {day.classes.map((cls, cIdx) => (
                    <div key={cIdx} className={`p-3 rounded-lg border ${day.isToday ? 'bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-800 shadow-sm' : 'bg-gray-50 dark:bg-gray-800/80 border-gray-100 dark:border-gray-700'}`}>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        <Video size={14} />
                        {cls.type}
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white mb-1">{cls.time}</p>
                      <p className="text-sm font-bold text-purple-700 dark:text-purple-300 leading-tight mb-2">{cls.name}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mb-2">{cls.room}</p>
                      <p className="text-[10px] font-medium text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-2">Prof. {cls.prof}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecordedClassesView = () => {
  const months = [
    {
      name: 'Dezembro 2025',
      classes: [
        { title: 'Modelagem de software', date: '12 DEZ', duration: '1h 45m' },
        { title: 'Interação Humano Computador e UX', date: '05 DEZ', duration: '2h 10m' },
      ]
    },
    {
      name: 'Novembro 2025',
      classes: [
        { title: 'Matemática Computacional Aplicada', date: '28 NOV', duration: '1h 50m' },
        { title: 'Programação de Soluções Computacionais', date: '21 NOV', duration: '2h 05m' },
        { title: 'Modelagem de software', date: '14 NOV', duration: '1h 55m' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">Aulas Gravadas</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Acesse o histórico de gravações das suas disciplinas.</p>
      </div>

      <div className="space-y-8">
        {months.map((month, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
              {month.name}
            </h3>
            <div className="space-y-3">
              {month.classes.map((cls, cIdx) => (
                <div key={cIdx} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all group">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
                      <Video size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{cls.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {cls.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {cls.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    <PlayCircle size={18} />
                    Acessar gravação
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MeusDadosScreen = ({ profileImage, setProfileImage }: { profileImage: string, setProfileImage: (img: string) => void }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(url);
    }
  };

  const handleSavePhoto = () => {
    if (selectedImage && termsAccepted) {
      setProfileImage(selectedImage);
      localStorage.setItem('ulife_profile_image', selectedImage);
      setIsPhotoModalOpen(false);
      setSelectedImage(null);
      setTermsAccepted(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">Minhas Configurações</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Gerencie seus dados pessoais, documentos e preferências.</p>
      </div>

      <div className="border-b border-gray-200 dark:border-zinc-700">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          <button className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
            Notificações
          </button>
          <button className="border-purple-500 text-purple-600 dark:text-purple-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
            Meus Dados
          </button>
          <button className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">
            Documentos de Matrícula
          </button>
        </nav>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 p-6 sm:p-8 relative">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div 
            className="shrink-0 relative group cursor-pointer"
            onClick={() => setIsPhotoModalOpen(true)}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Perfil"
                className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-50 dark:ring-purple-900/20 group-hover:brightness-75 transition-all"
                referrerPolicy="no-referrer"
              />
            ) : (
              <UserCircle className="w-32 h-32 text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full ring-4 ring-purple-50 dark:ring-purple-900/20 group-hover:brightness-75 transition-all" />
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 p-2 rounded-full text-white">
                <Pencil size={20} />
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Informações Pessoais</h3>
            
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Nome Completo</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Jefherson Luiz da Silva</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">E-mail</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">jefhersonluiz08@gmail.com</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Login (RA/CPF)</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">10551233931</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Data de Nascimento</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">15 / 08 / 2006</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Telefone</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">(48) 98808-5805</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {isPhotoModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-2xl w-full overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alterar Foto de Perfil</h3>
              <button onClick={() => setIsPhotoModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Imagem atual</span>
                {selectedImage || profileImage ? (
                  <img
                    src={selectedImage || profileImage}
                    alt="Pré-visualização"
                    className="w-32 h-32 rounded-lg object-cover border border-gray-200 dark:border-zinc-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <UserCircle className="w-32 h-32 text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700" />
                )}
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inserir imagem</span>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 text-sm font-medium transition-colors">
                      Escolher arquivo
                      <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    </label>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedImage ? "Arquivo selecionado" : "Nenhum arquivo escolhido"}
                    </span>
                  </div>
                </div>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Eu declaro ter todos os direitos legais sobre a imagem e não violar o <a href="https://www.ulife.com.br/Controls/RequestFile.aspx?id=17" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Termos de Uso</a>
                  </span>
                </label>
                
                <button 
                  onClick={handleSavePhoto}
                  disabled={!selectedImage || !termsAccepted}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-white transition-colors ${
                    selectedImage && termsAccepted 
                      ? 'bg-purple-600 hover:bg-purple-700 shadow-sm' 
                      : 'bg-gray-300 dark:bg-zinc-700 cursor-not-allowed'
                  }`}
                >
                  Salvar foto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardScreen = ({ onLogout, onNavigateHome, profileImage, setProfileImage }: { onLogout: () => void, onNavigateHome: () => void, profileImage: string, setProfileImage: (img: string) => void }) => {
  const [currentView, setCurrentView] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <DashboardHome />;
      case 'schedule':
        return <ScheduleView />;
      case 'recorded':
        return <RecordedClassesView />;
      case 'meus-dados':
        return <MeusDadosScreen profileImage={profileImage} setProfileImage={setProfileImage} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
            <Briefcase size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium">Página em construção</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-zinc-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-900 dark:selection:text-purple-100 transition-colors">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onLogout={onLogout} onNavigate={setCurrentView} onNavigateHome={() => { setCurrentView('home'); onNavigateHome(); }} profileImage={profileImage} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'microsoft-selection' | 'dashboard' | 'recuperar-senha'>('login');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('ulife_profile_image') || '';
  });

  const handleLogin = (user: string) => {
    setUsername(user);
    setCurrentScreen('microsoft-selection');
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={handleLogin} 
          onRecoverPassword={() => setCurrentScreen('recuperar-senha')} 
        />
      )}
      {currentScreen === 'recuperar-senha' && (
        <RecuperarSenhaScreen onBack={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'microsoft-selection' && (
        <MicrosoftSelectionScreen 
          username={username} 
          onSelectAccount={() => setCurrentScreen('dashboard')} 
          onBack={() => setCurrentScreen('login')} 
          profileImage={profileImage}
        />
      )}
      {currentScreen === 'dashboard' && (
        <DashboardScreen 
          onLogout={() => setCurrentScreen('login')} 
          onNavigateHome={() => setCurrentScreen('dashboard')}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
        />
      )}
    </>
  );
}
