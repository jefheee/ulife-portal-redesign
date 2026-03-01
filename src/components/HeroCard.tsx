import React from 'react';
import { Home, Clock, PlayCircle } from 'lucide-react';

const HeroCard: React.FC = () => {
  const dayOfWeek = new Date().getDay();

  const schedule: Record<
    number,
    { subject: string; prof: string; time: string; room: string } | null
  > = {
    0: null,
    1: null,
    2: {
      subject: 'Matemática Computacional Aplicada',
      prof: 'Tamires Cristina',
      time: '19h00 às 21h50',
      room: 'Sala H - 1º Andar - Pbh219',
    },
    3: {
      subject: 'Matemática Computacional Aplicada',
      prof: 'Claudio Coelho',
      time: '19h00 às 21h50',
      room: 'Sala D - Térreo - Pb119d',
    },
    4: {
      subject: 'Interação Humano Computador e UX',
      prof: 'Fernando Costa',
      time: '19h00 às 21h50',
      room: 'Laboratório De Inovação Digital I - E2',
    },
    5: {
      subject: 'Interação Humano Computador e UX',
      prof: 'Armando Cardoso',
      time: '19h00 às 21h50',
      room: 'Laboratório De Inovação Digital I - E2',
    },
    6: null,
  };

  const todayClass = schedule[dayOfWeek];

  if (!todayClass) {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group transition-colors">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/10 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 bg-gray-50 dark:bg-zinc-900 px-2.5 py-1 rounded-full border border-gray-100 dark:border-zinc-700">
              <Home size={14} className="text-gray-400 dark:text-gray-500" /> Descanso
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Bom descanso!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Você não tem aulas presenciais hoje. Aproveite para descansar ou colocar atividades em
            dia!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group transition-colors">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

      <div className="relative z-10 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-red-100 dark:border-red-800/50">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            Ao Vivo Agora
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 bg-gray-50 dark:bg-zinc-900 px-2.5 py-1 rounded-full border border-gray-100 dark:border-zinc-700">
            <Clock size={14} className="text-gray-400 dark:text-gray-500" /> Hoje, {todayClass.time}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          {todayClass.subject}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2 flex-wrap">
          Prof. {todayClass.prof}{' '}
          <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full hidden sm:block"></span>{' '}
          <span className="block sm:inline">{todayClass.room}</span>
        </p>
      </div>

      <button className="relative z-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all flex items-center gap-2.5 whitespace-nowrap w-full md:w-auto justify-center active:scale-95">
        <PlayCircle size={20} className="animate-pulse" />
        Acessar Aula Ao Vivo
      </button>
    </div>
  );
};

export default HeroCard;

