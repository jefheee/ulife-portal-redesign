import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import DashboardHome from '../components/DashboardHome';
import ScheduleView from '../components/ScheduleView';
import RecordedClassesView from '../components/RecordedClassesView';
import MeusDadosScreen from './MeusDadosScreen';

interface DashboardScreenProps {
  onLogout: () => void;
  onNavigateHome: () => void;
  profileImage: string;
  setProfileImage: (img: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onLogout,
  onNavigateHome,
  profileImage,
  setProfileImage,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [currentView, setCurrentView] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <DashboardHome />;
      case 'schedule':
        return <ScheduleView />;
      case 'recorded':
        return <RecordedClassesView />;
      case 'meus-dados':
        return <MeusDadosScreen profileImage={profileImage} setProfileImage={setProfileImage} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
            <Briefcase size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium">Página em construção</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-zinc-900 font-sans text-gray-900 dark:text-gray-100 overflow-hidden selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-900 dark:selection:text-purple-100 transition-colors">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopNavbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onLogout={onLogout}
          onNavigate={setCurrentView}
          onNavigateHome={() => {
            setCurrentView('home');
            onNavigateHome();
          }}
          profileImage={profileImage}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20">{renderView()}</main>
      </div>
    </div>
  );
};

export default DashboardScreen;

