import React from 'react';
import { Plus, UserCircle } from 'lucide-react';

interface MicrosoftSelectionScreenProps {
  username: string;
  profileImage: string;
  onSelectAccount: () => void;
  onBack: () => void;
}

const MicrosoftSelectionScreen: React.FC<MicrosoftSelectionScreenProps> = ({
  username,
  profileImage,
  onSelectAccount,
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-950 via-zinc-900 to-black flex items-center justify-center p-4 font-sans">
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
            <span className="text-gray-600 font-semibold text-sm tracking-tight">
              Ecossistema Ânima
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
            Escolha uma conta
          </h2>

          <div className="space-y-1">
            <button
              onClick={onSelectAccount}
              className="w-full flex items-center gap-4 p-3 -mx-3 hover:bg-gray-50 transition-colors rounded-lg text-left group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Perfil"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <UserCircle className="w-full h-full text-zinc-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-gray-900 truncate">
                  Jefherson Luiz da Silva
                </p>
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

export default MicrosoftSelectionScreen;

