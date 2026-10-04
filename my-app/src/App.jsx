import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() =>{
    return localStorage.getItem('theme') || 'dark';
  });
  
  const [currentView, setCurrentView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const handleSelectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app-layout ${theme}`}>
    <Sidebar 
    currentView={currentView} 
    onSelectView={setCurrentView} 
    selectedTag={selectedTag} 
    onSelectTag={setSelectedTag} 
    
/>
      <div className="main-wrapper">
        <Header 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onOpenModal={() => setIsModalOpen(true)}
            theme={theme}
            onSelectTheme={handleSelectTheme} 
        />
        <MainContent 
        currentView={currentView}
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        searchTerm={searchTerm}
        selectedTag={selectedTag} 
        />
      </div>
    </div>
  );
}

export default App;