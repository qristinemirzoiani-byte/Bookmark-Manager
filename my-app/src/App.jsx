import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';


function App() {
  return (
    <div className="app-layout">
        
      <Sidebar 
        currentView="home" 
        onSelectView={(view) => console.log(view)} 
        selectedTag={null} 
        onSelectTag={(tag) => console.log(tag)} 
      />
      <div className="main-wrapper">
        <Header />
        <MainContent />
        <main className="main-content">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
}



export default App;