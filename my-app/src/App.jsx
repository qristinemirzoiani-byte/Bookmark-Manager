import React from 'react';
import Sidebar from './Components/Sidebar';
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

      <main className="main-content">
      </main>
    </div>
  );
}

export default App;