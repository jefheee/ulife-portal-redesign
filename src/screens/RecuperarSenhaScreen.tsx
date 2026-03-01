import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';

interface RecuperarSenhaScreenProps {
  onBack: () => void;
}

const RecuperarSenhaScreen: React.FC<RecuperarSenhaScreenProps> = ({ onBack }) => {
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
            Ao utilizar esta função, caso não receba o e-mail de recuperação de senha em um de seus
            e-mails pessoais, por favor entre em contato com os canais oficiais de atendimento.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="recovery-input"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
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
                Foi enviado um e-mail de recuperação de senha para o(s) email(s) pessoal(is)
                cadastrado(s) associado(s) ao RA/Login/CPF informado. Caso não tenha recebido o email
                de recuperação de senha, acione a central de atendimento da sua Instituição através
                do Whatsapp (link disponível no site da instituição) ou presencialmente.
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

export default RecuperarSenhaScreen;

