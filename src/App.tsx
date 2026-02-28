import React, { useState } from 'react';
import { GraduationCap, HelpCircle, Users, User, Plus } from 'lucide-react';

const LoginScreen = ({ onLogin }: { onLogin: (username: string) => void }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length < 5) {
      setError(true);
    } else {
      setError(false);
      onLogin(username.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-purple-600">
          <GraduationCap size={56} strokeWidth={1.5} />
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
                RA, CPF ou Nome de Usuário
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
              <a href="#" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 shadow-sm text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <HelpCircle size={18} className="text-gray-400" />
                Como realizar o acesso
              </a>
              <a href="#" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 shadow-sm text-sm font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Users size={18} className="text-gray-400" />
                Acessar Ulife Colaboradores
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MicrosoftSelectionScreen = ({ username, onSelectAccount, onBack }: { username: string, onSelectAccount: () => void, onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[440px] overflow-hidden">
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
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                <User size={24} />
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

const DashboardScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Bem-vindo ao Dashboard</h1>
        <p className="text-gray-500 font-medium">[Em Construção]</p>
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'microsoft-selection' | 'dashboard'>('login');
  const [username, setUsername] = useState('');

  const handleLogin = (user: string) => {
    setUsername(user);
    setCurrentScreen('microsoft-selection');
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      {currentScreen === 'microsoft-selection' && (
        <MicrosoftSelectionScreen 
          username={username} 
          onSelectAccount={() => setCurrentScreen('dashboard')} 
          onBack={() => setCurrentScreen('login')} 
        />
      )}
      {currentScreen === 'dashboard' && (
        <DashboardScreen />
      )}
    </>
  );
}

