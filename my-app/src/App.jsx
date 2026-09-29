import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  
  const [currentView, setCurrentView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar 
        currentView={currentView} 
        onSelectView={setCurrentView} 
        selectedTag={null} 
        onSelectTag={(tag) => console.log(tag)} 
      />
      <div className="main-wrapper">
        <Header onOpenModal={() => setIsModalOpen(true)} />
        <MainContent 
        currentView={currentView}
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;