import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  
  const [currentView, setCurrentView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <div className="app-layout">
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