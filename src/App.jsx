import React from 'react';
import { FinanceProvider } from './context/FinanceContext.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import './styles/App.css';

function App() {
  return (
    <FinanceProvider>
      <Dashboard />
    </FinanceProvider>
  );
}

export default App;
