import React from 'react';
import { Receipt, FileCheck, Calendar, CheckSquare } from 'lucide-react';

const QuickShortcuts: React.FC = () => {
  const shortcuts = [
    {
      icon: Receipt,
      label: 'Emitir Boleto',
      color:
        'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50',
    },
    {
      icon: FileCheck,
      label: 'Atestado de Matrícula',
      color:
        'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50',
    },
    {
      icon: Calendar,
      label: 'Calendário Acadêmico',
      color:
        'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50',
    },
    {
      icon: CheckSquare,
      label: 'Atividades Complementares',
      color:
        'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700/50',
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
        Atalhos Rápidos
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {shortcuts.map((shortcut, idx) => (
          <button
            key={idx}
            className={`p-4 rounded-xl border transition-colors flex items-center gap-3 text-left group ${shortcut.color}`}
          >
            <div className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm group-hover:scale-110 transition-transform text-purple-600 dark:text-purple-400">
              <shortcut.icon size={20} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold leading-tight text-gray-700 dark:text-gray-200">
              {shortcut.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickShortcuts;

