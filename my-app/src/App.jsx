import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  // 👇 აი ეს ცვლადი იმახსოვრებს, 'home'-ზე ვართ თუ 'archived'-ზე!
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="app-layout">
      <Sidebar 
        currentView={currentView} 
        onSelectView={setCurrentView} 
        selectedTag={null} 
        onSelectTag={(tag) => console.log(tag)} 
      />
      <div className="main-wrapper">
        <Header />
        {/* 👇 MainContent-ს გადავეცით currentView! */}
        <MainContent currentView={currentView} />
      </div>
    </div>
  );
}

export default App;