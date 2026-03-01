import React from 'react';
import { MoreHorizontal, Play, FileText, CheckSquare } from 'lucide-react';

const SubjectsGrid: React.FC = () => {
  const subjects = [
    {
      name: 'Interação Humano Computador e UX',
      code: 'ADS1AN-PBB1-68615550',
      type: 'Prática (Presencial)',
      progress: 16,
      gradient: 'from-purple-600 to-purple-800',
      color: 'purple',
    },
    {
      name: 'Matemática Computacional Aplicada',
      code: 'ADS1AN-PBB-68612179',
      type: 'Teórica (Presencial)',
      progress: 1,
      gradient: 'from-fuchsia-600 to-purple-700',
      color: 'fuchsia',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Minhas UCs em Andamento
        </h3>
        <button className="text-sm text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 hover:underline underline-offset-4 transition-all">
          Ver todas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 overflow-hidden flex flex-col hover:shadow-md hover:border-purple-100 dark:hover:border-purple-900/50 transition-all group"
          >
            <div className="h-28 relative bg-zinc-900 overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10 shadow-sm">
                  {subject.type}
                </span>
                <button className="text-white/80 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h4
                className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1.5 line-clamp-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                title={subject.name}
              >
                {subject.name}
              </h4>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-5">
                {subject.code}
              </p>

              <div className="mt-auto mb-5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Progresso
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {subject.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-zinc-700 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-1.5 rounded-full transition-all duration-1000 ease-out bg-purple-600"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <Play size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Continuar</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <FileText size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Material</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1.5 py-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                  <CheckSquare size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Avaliações</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsGrid;

