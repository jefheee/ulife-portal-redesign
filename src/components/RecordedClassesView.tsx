import React from 'react';
import { Calendar, Video, Clock, PlayCircle } from 'lucide-react';

const RecordedClassesView: React.FC = () => {
  const months = [
    {
      name: 'Dezembro 2025',
      classes: [
        { title: 'Modelagem de software', date: '12 DEZ', duration: '1h 45m' },
        { title: 'Interação Humano Computador e UX', date: '05 DEZ', duration: '2h 10m' },
      ],
    },
    {
      name: 'Novembro 2025',
      classes: [
        { title: 'Matemática Computacional Aplicada', date: '28 NOV', duration: '1h 50m' },
        { title: 'Programação de Soluções Computacionais', date: '21 NOV', duration: '2h 05m' },
        { title: 'Modelagem de software', date: '14 NOV', duration: '1h 55m' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          Aulas Gravadas
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Acesse o histórico de gravações das suas disciplinas.
        </p>
      </div>

      <div className="space-y-8">
        {months.map((month, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
              {month.name}
            </h3>
            <div className="space-y-3">
              {month.classes.map((cls, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
                      <Video size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {cls.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {cls.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {cls.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    <PlayCircle size={18} />
                    Acessar gravação
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordedClassesView;

