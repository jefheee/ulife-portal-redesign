import React from 'react';
import HeroCard from './HeroCard';
import UrgentTasks from './UrgentTasks';
import QuickShortcuts from './QuickShortcuts';
import SubjectsGrid from './SubjectsGrid';

const DashboardHome: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
            Olá, Jefherson! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Aqui está o resumo do seu semestre.
          </p>
        </div>
        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 hidden sm:block">
          {new Date().toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })}
        </p>
      </div>

      <HeroCard />
      <UrgentTasks />
      <QuickShortcuts />
      <SubjectsGrid />
    </div>
  );
};

export default DashboardHome;

