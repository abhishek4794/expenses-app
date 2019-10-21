import React from 'react';
import './App.css';
import { Home } from '../src/pages/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home message='Hi home' />
    </div>
  );
}

export default App;
