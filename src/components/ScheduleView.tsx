import React from 'react';
import { BookOpen, Video, Calendar } from 'lucide-react';

const ScheduleView: React.FC = () => {
  const days = [
    { name: 'Segunda', date: '23', classes: [] },
    {
      name: 'Terça',
      date: '24',
      classes: [
        {
          name: 'Matemática Computacional Aplicada',
          time: '19h00 - 21h50',
          type: 'Presencial',
          room: 'Pedra Branca - Sala De Aula - H - 1º Andar - Pbh219',
          prof: 'Tamires Cristina Costa Louzada',
        },
      ],
    },
    {
      name: 'Quarta',
      date: '25',
      classes: [
        {
          name: 'Matemática Computacional Aplicada',
          time: '19h00 - 21h50',
          type: 'Presencial',
          room: 'Pedra Branca - Sala De Aula - D - Térreo - Pb119d',
          prof: 'Claudio Coelho',
        },
      ],
    },
    {
      name: 'Quinta',
      date: '26',
      classes: [
        {
          name: 'Interação Humano Computador e UX',
          time: '19h00 - 21h50',
          type: 'Presencial',
          room: 'Pedra Branca - Laboratório De Inovação Digital I - E2 - 1º Andar',
          prof: 'Fernando Costa',
        },
      ],
    },
    {
      name: 'Sexta',
      date: '27',
      isToday: true,
      classes: [
        {
          name: 'Interação Humano Computador e UX',
          time: '19h00 - 21h50',
          type: 'Presencial',
          room: 'Pedra Branca - Laboratório De Inovação Digital I - E2 - 1º Andar',
          prof: 'Armando Cardoso',
        },
      ],
    },
    { name: 'Sábado', date: '28', classes: [] },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Quadro de Aulas
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Fevereiro 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Semana Anterior
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Próxima Semana
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col h-full">
            <div
              className={`text-center py-3 rounded-t-xl border-t border-x ${
                // @ts-expect-error parcial para destacar o dia atual
                day.isToday
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider">{day.name}</p>
              <p
                className={`text-xl font-bold ${
                  // @ts-expect-error parcial para destacar o dia atual
                  day.isToday ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}
              >
                {day.date}
              </p>
            </div>
            <div
              className={`flex-1 p-3 border-b border-x rounded-b-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 ${
                // @ts-expect-error parcial para destacar o dia atual
                day.isToday
                  ? 'border-x-purple-200 border-b-purple-200 dark:border-x-purple-900/50 dark:border-b-purple-900/50 bg-purple-50/30 dark:bg-purple-900/10'
                  : ''
              }`}
            >
              {day.classes.length === 0 ? (
                <div className="h-32 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 gap-2">
                  <BookOpen size={24} className="opacity-50" />
                  <span className="text-xs font-medium">(sem aula)</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {day.classes.map((cls, cIdx) => (
                    <div
                      key={cIdx}
                      className={`p-3 rounded-lg border ${
                        // @ts-expect-error parcial para destacar o dia atual
                        day.isToday
                          ? 'bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-800 shadow-sm'
                          : 'bg-gray-50 dark:bg-gray-800/80 border-gray-100 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        <Video size={14} />
                        {cls.type}
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white mb-1">
                        {cls.time}
                      </p>
                      <p className="text-sm font-bold text-purple-700 dark:text-purple-300 leading-tight mb-2">
                        {cls.name}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mb-2">
                        {cls.room}
                      </p>
                      <p className="text-[10px] font-medium text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-2">
                        Prof. {cls.prof}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleView;

