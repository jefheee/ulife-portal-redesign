import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface NotificacoesScreenProps {
  onNavigate: (view: string) => void;
}

type Canal = 'email' | 'site' | 'app';

interface NotificacaoItem {
  id: string;
  label: string;
  defaultAtivo?: Partial<Record<Canal, boolean>>;
}

interface CategoriaNotificacao {
  id: string;
  titulo: string;
  itens: NotificacaoItem[];
}

const categorias: CategoriaNotificacao[] = [
  {
    id: 'comunidade',
    titulo: 'Comunidade',
    itens: [
      { id: 'comunidade-mensagem', label: 'Me enviaram uma mensagem' },
      { id: 'comunidade-mencao', label: 'Me marcaram em um comentário' },
      { id: 'comunidade-resposta', label: 'Responderam um post meu' },
    ],
  },
  {
    id: 'interno',
    titulo: 'Interno',
    itens: [
      {
        id: 'interno-primeiro-acesso',
        label: 'Aviso de primeiro acesso e orientações da plataforma',
      },
      {
        id: 'interno-aviso-prazo',
        label: 'Avisos sobre prazos importantes (matrícula, rematrícula, provas)',
      },
      {
        id: 'interno-comunicados-gerais',
        label: 'Comunicados gerais da instituição',
      },
    ],
  },
  {
    id: 'meus-administradores',
    titulo: 'Meus Administradores',
    itens: [
      {
        id: 'adm-mensagens',
        label: 'Mensagens enviadas pela secretaria ou coordenação',
      },
      {
        id: 'adm-documentos',
        label: 'Solicitações e atualizações sobre documentos de matrícula',
      },
    ],
  },
  {
    id: 'minha-escola',
    titulo: 'Minha Escola',
    itens: [
      { id: 'escola-eventos', label: 'Eventos, palestras e atividades extracurriculares' },
      {
        id: 'escola-calendario',
        label: 'Atualizações no calendário acadêmico',
      },
    ],
  },
];

type EstadoToggle = Record<
  string,
  {
    email: boolean;
    site: boolean;
    app: boolean;
  }
>;

const construirEstadoInicial = (): EstadoToggle => {
  const estado: EstadoToggle = {};

  categorias.forEach((categoria) => {
    categoria.itens.forEach((item) => {
      estado[item.id] = {
        email: item.defaultAtivo?.email ?? true,
        site: item.defaultAtivo?.site ?? true,
        app: item.defaultAtivo?.app ?? true,
      };
    });
  });

  return estado;
};

const NotificacoesScreen: React.FC<NotificacoesScreenProps> = ({ onNavigate }) => {
  const [estado, setEstado] = useState<EstadoToggle>(construirEstadoInicial);

  const toggleCanal = (id: string, canal: Canal) => {
    setEstado((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [canal]: !prev[id][canal],
      },
    }));
  };

  const renderToggle = (id: string, canal: Canal) => {
    const ativo = estado[id]?.[canal];

    return (
      <button
        type="button"
        onClick={() => toggleCanal(id, canal)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          ativo ? 'bg-purple-600' : 'bg-gray-300 dark:bg-zinc-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            ativo ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          Minhas Configurações
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Personalize como você quer ser avisado sobre o que acontece na sua vida acadêmica.
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-zinc-700">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          <button
            onClick={() => onNavigate('notificacoes')}
            className="border-purple-500 text-purple-600 dark:text-purple-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
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
            className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Documentos de Matrícula
          </button>
        </nav>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/40 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
        <div className="mt-0.5">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-200">
            <Info size={18} />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Notificações importantes
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
            Você não pode desativar as notificações importantes, elas possuem informações
            essenciais para você.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {categorias.map((categoria) => (
          <section key={categoria.id} className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              {categoria.titulo}
            </h4>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-3 border-b border-gray-100 dark:border-zinc-700">
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <div className="col-span-2 sm:col-span-2" />
                  <div className="text-center">Email</div>
                  <div className="text-center">Site</div>
                  <div className="text-center">App</div>
                </div>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-zinc-700">
                {categoria.itens.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 sm:px-6 py-3 flex items-center gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 dark:text-gray-100">
                        {item.label}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:block">{renderToggle(item.id, 'email')}</div>
                      <div className="hidden sm:block">{renderToggle(item.id, 'site')}</div>
                      <div className="block">{renderToggle(item.id, 'app')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NotificacoesScreen;

