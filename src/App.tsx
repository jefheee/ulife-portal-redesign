import React, { useState } from 'react';
import { GraduationCap, HelpCircle, Users } from 'lucide-react';

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
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
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                RA, CPF ou Nome de Usuário
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-all"
                  placeholder="Digite seu acesso"
                />
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
  const [currentScreen, setCurrentScreen] = useState<'login' | 'dashboard'>('login');

  return (
    <>
      {currentScreen === 'login' ? (
        <LoginScreen onLogin={() => setCurrentScreen('dashboard')} />
      ) : (
        <DashboardScreen />
      )}
    </>
  );
}

