import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  
  const [currentView, setCurrentView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-layout">
      <Sidebar 
        currentView={currentView} 
        onSelectView={setCurrentView} 
        selectedTag={null} 
        onSelectTag={(tag) => console.log(tag)} 
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
        />
      </div>
    </div>
  );
}

export default App;