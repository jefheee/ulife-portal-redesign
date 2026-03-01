import React, { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import RecuperarSenhaScreen from './screens/RecuperarSenhaScreen';
import MicrosoftSelectionScreen from './screens/MicrosoftSelectionScreen';
import DashboardScreen from './screens/DashboardScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'microsoft-selection' | 'dashboard' | 'recuperar-senha'>('login');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('ulife_profile_image') || '';
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const handleLogin = (user: string) => {
    setUsername(user);
    setCurrentScreen('microsoft-selection');
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={handleLogin} 
          onRecoverPassword={() => setCurrentScreen('recuperar-senha')} 
        />
      )}
      {currentScreen === 'recuperar-senha' && (
        <RecuperarSenhaScreen onBack={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'microsoft-selection' && (
        <MicrosoftSelectionScreen 
          username={username} 
          onSelectAccount={() => setCurrentScreen('dashboard')} 
          onBack={() => setCurrentScreen('login')} 
          profileImage={profileImage}
        />
      )}
      {currentScreen === 'dashboard' && (
        <DashboardScreen 
          onLogout={() => setCurrentScreen('login')} 
          onNavigateHome={() => setCurrentScreen('dashboard')}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </>
  );
}
