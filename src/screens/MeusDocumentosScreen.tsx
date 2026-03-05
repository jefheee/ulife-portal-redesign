import React, { useState } from 'react';
import { FileText, Upload, X } from 'lucide-react';

type DocumentoStatus = 'Pendente' | 'Invalidado' | 'Em análise' | 'Entregue';

interface Documento {
  id: number;
  nome: string;
  status: DocumentoStatus;
}

const initialDocumentos: Documento[] = [
  { id: 1, nome: 'Boletim do ENEM', status: 'Entregue' },
  { id: 2, nome: 'Caderneta de Vacinação', status: 'Pendente' },
  { id: 3, nome: 'Carteira de Identidade', status: 'Entregue' },
  { id: 4, nome: 'Certidão de Nascimento ou Casamento', status: 'Pendente' },
  {
    id: 5,
    nome: 'Certificado e Histórico Escolar de Conclusão do Ensino Médio',
    status: 'Em análise',
  },
  {
    id: 6,
    nome: 'Comprovante de Conclusão de Escolaridade (Ensino Médio ou Ensino Superior)',
    status: 'Invalidado',
  },
  {
    id: 7,
    nome: 'Comprovante de endereço (Água, Luz e Telefone)',
    status: 'Pendente',
  },
  { id: 8, nome: 'Comprovante de última votação', status: 'Entregue' },
  { id: 9, nome: 'CPF', status: 'Entregue' },
  { id: 10, nome: 'Título Eleitoral', status: 'Pendente' },
];

interface MeusDocumentosScreenProps {
  onNavigate: (view: string) => void;
}

const MeusDocumentosScreen: React.FC<MeusDocumentosScreenProps> = ({ onNavigate }) => {
  const [documentos, setDocumentos] = useState<Documento[]>(initialDocumentos);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const resumo = documentos.reduce(
    (acc, doc) => {
      acc.totalPendentes += doc.status === 'Pendente' ? 1 : 0;
      acc.totalInvalidos += doc.status === 'Invalidado' ? 1 : 0;
      acc.totalEmAnalise += doc.status === 'Em análise' ? 1 : 0;
      acc.totalEntregues += doc.status === 'Entregue' ? 1 : 0;
      return acc;
    },
    {
      totalPendentes: 0,
      totalInvalidos: 0,
      totalEmAnalise: 0,
      totalEntregues: 0,
    }
  );

  const getStatusClasses = (status: DocumentoStatus) => {
    switch (status) {
      case 'Pendente':
        return 'bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-gray-200';
      case 'Invalidado':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'Em análise':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Entregue':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-gray-200';
    }
  };

  const openUploadModal = (docId: number) => {
    setSelectedDocId(docId);
    setSelectedFile(null);
    setTermsAccepted(false);
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setSelectedDocId(null);
    setSelectedFile(null);
    setTermsAccepted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (!selectedDocId || !selectedFile || !termsAccepted) return;

    setDocumentos((prev) =>
      prev.map((doc) =>
        doc.id === selectedDocId ? { ...doc, status: 'Em análise' } : doc
      )
    );
    closeUploadModal();
  };

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
          <button
            onClick={() => onNavigate('notificacoes')}
            className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Notificações
          </button>
          <button
            onClick={() => onNavigate('meus-dados')}
            className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Meus Dados
          </button>
          <button
            onClick={() => onNavigate('meus-documentos')}
            className="border-purple-500 text-purple-600 dark:text-purple-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Documentos de Matrícula
          </button>
        </nav>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 p-6 sm:p-8 space-y-6">
        {/* Dashboard de Status: fileira de 4 pills */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Pendentes: <strong className="text-gray-900 dark:text-white">{resumo.totalPendentes}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-900/30 px-4 py-2 text-sm font-medium text-red-800 dark:text-red-400">
            Invalidados: <strong>{resumo.totalInvalidos}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-4 py-2 text-sm font-medium text-amber-800 dark:text-amber-400">
            Em análise: <strong>{resumo.totalEmAnalise}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-400">
            Entregues: <strong>{resumo.totalEntregues}</strong>
          </span>
        </div>

        {/* Lista de cards */}
        <div className="space-y-3">
          {documentos.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 sm:px-5 py-4"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <FileText className="w-5 h-5 shrink-0 text-gray-400 dark:text-gray-500" />
                <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
                  {doc.nome}
                </p>
              </div>
              {doc.status === 'Pendente' ? (
                <button
                  type="button"
                  onClick={() => openUploadModal(doc.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 cursor-pointer hover:opacity-90 transition-opacity ${getStatusClasses(
                    doc.status
                  )}`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  {doc.status}
                </button>
              ) : (
                <span
                  className={`inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 ${getStatusClasses(
                    doc.status
                  )}`}
                >
                  {doc.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-lg w-full overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Enviar Documento
              </h3>
              <button
                onClick={closeUploadModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Selecione o arquivo
                </p>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 text-sm font-medium transition-colors">
                    Escolher arquivo
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                    {selectedFile ? selectedFile.name : 'Nenhum arquivo selecionado'}
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
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Declaro que li e concordo com os{' '}
                  <a
                    href="https://www.ulife.com.br/Controls/RequestFile.aspx?id=17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Termos de Uso
                  </a>{' '}
                  e com a{' '}
                  <a
                    href="https://www.ulife.com.br/politica-de-privacidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  .
                </span>
              </label>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeUploadModal}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleUpload}
                  disabled={!selectedFile || !termsAccepted}
                  className={`px-5 py-2 rounded-lg text-sm font-bold text-white transition-colors ${
                    selectedFile && termsAccepted
                      ? 'bg-purple-600 hover:bg-purple-700 shadow-sm'
                      : 'bg-gray-300 dark:bg-zinc-700 cursor-not-allowed'
                  }`}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeusDocumentosScreen;

