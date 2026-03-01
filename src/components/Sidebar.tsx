import React from 'react';
import {
  Home,
  BookOpen,
  Calendar,
  Video,
  GraduationCap,
  DollarSign,
  Briefcase,
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setCurrentView,
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'ucs', icon: BookOpen, label: 'Minhas UCs' },
    { id: 'schedule', icon: Calendar, label: 'Quadro de Aulas' },
    { id: 'recorded', icon: Video, label: 'Aulas Gravadas' },
    { id: 'grades', icon: GraduationCap, label: 'Notas' },
    { id: 'finance', icon: DollarSign, label: 'Financeiro' },
    { id: 'services', icon: Briefcase, label: 'Serviços' },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 md:w-24 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col items-center py-6 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:transform-none`}
    >
      <nav className="flex flex-col gap-4 w-full px-3">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                onToggleSidebar();
              }}
              className={`flex flex-col items-center justify-center w-full gap-2 py-4 px-2 rounded-xl transition-all ${
                isActive 
                  ? 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 font-semibold' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-medium'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] text-center leading-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

