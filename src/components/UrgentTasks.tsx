import React from 'react';
import { AlertCircle, FileText, Clock } from 'lucide-react';

const UrgentTasks: React.FC = () => {
  const tasks = [
    {
      title: 'Arquitetura da Informação parte 1',
      dueDate: 'Hoje às 23:59',
      subject: 'Interação Humano Computador e UX',
    },
    {
      title: 'Atividade Figma',
      dueDate: 'Hoje às 23:59',
      subject: 'Interação Humano Computador e UX',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <AlertCircle className="text-orange-500" size={20} />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Prazos Próximos
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-gray-200 dark:border-zinc-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group"
          >
            <div className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
              <FileText size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {task.title}
              </h4>
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

export default UrgentTasks;

