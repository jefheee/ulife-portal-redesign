import React, { useState, useEffect } from 'react';
import { Pencil, UserCircle, X } from 'lucide-react';

interface MeusDadosScreenProps {
  profileImage: string;
  setProfileImage: (img: string) => void;
}

const MeusDadosScreen: React.FC<MeusDadosScreenProps> = ({
  profileImage,
  setProfileImage,
}) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSavePhoto = () => {
    if (selectedImage && termsAccepted) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('ulife_profile_image', base64String);
        setIsPhotoModalOpen(false);
        setSelectedImage(null);
        setTermsAccepted(false);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedImage]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          Minhas Configurações
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Gerencie seus dados pessoais, documentos e preferências.
        </p>
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Informações Pessoais
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nome Completo
                </dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  Jefherson Luiz da Silva
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">E-mail</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  jefhersonluiz08@gmail.com
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Login (RA/CPF)
                </dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  10551233931
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Data de Nascimento
                </dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  15 / 08 / 2006
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Telefone</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  (48) 98808-5805
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {isPhotoModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-2xl w-full overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Alterar Foto de Perfil
              </h3>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Imagem atual
                </span>
                {previewUrl || profileImage ? (
                  <img
                    src={previewUrl || profileImage}
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
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inserir imagem
                  </span>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 text-sm font-medium transition-colors">
                      Escolher arquivo
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedImage ? 'Arquivo selecionado' : 'Nenhum arquivo escolhido'}
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
                    Eu declaro ter todos os direitos legais sobre a imagem e não violar o{' '}
                    <a
                      href="https://www.ulife.com.br/Controls/RequestFile.aspx?id=17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      Termos de Uso
                    </a>
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

export default MeusDadosScreen;

