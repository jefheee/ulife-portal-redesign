import React, { useState } from 'react';
import { HelpCircle, Users, X } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
  onRecoverPassword: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onRecoverPassword }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            <svg
              width="64"
              height="64"
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
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Ulife
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-medium">Portal Acadêmico</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
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
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0H0V10H10V0Z" fill="#F25022" />
                    <path d="M21 0H11V10H21V0Z" fill="#7FBA00" />
                    <path d="M10 11H0V21H10V11Z" fill="#00A4EF" />
                    <path d="M21 11H11V21H21V11Z" fill="#FFB900" />
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
                <h3 className="text-xl font-bold text-purple-700">
                  Orientações para realizar o acesso
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 text-sm text-gray-600 space-y-4 overflow-y-auto">
                <p>
                  Para acessar o sistema, utilize seu RA, CPF ou nome de usuário e a senha. Confira
                  abaixo os formatos de acesso de acordo com cada perfil:
                  <br />
                  <br />
                  Estudantes Presenciais, Semipresenciais e Live: Utilize seu RA.
                  <br />
                  Estudantes do EAD: Utilize seu CPF.
                  <br />
                  Docentes: Utilize seu nome de usuário.
                  <br />
                  <br />
                  Se você não sabe seu login ou esqueceu sua senha, clique no botão cadastrar nova
                  senha logo abaixo. Vamos direcioná-lo para a página de Troca de Senha. Nela, você
                  digita seu CPF e o e-mail com os próximos passos será enviado para seu email
                  pessoal cadastrado no processo de matrícula. Depois, é só voltar aqui na tela de
                  login e acessar sua conta com a nova senha. Se ainda tiver dúvidas, você pode
                  acessar o{' '}
                  <a
                    href="https://go.screenpal.com/watch/cTfiIQnjfkm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    vídeo explicativo
                  </a>{' '}
                  sobre como trocar a senha.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-center shrink-0">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    onRecoverPassword();
                  }}
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

export default LoginScreen;

