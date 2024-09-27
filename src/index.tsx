import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import BusinessCard from './components/BusinessCard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BusinessCard />
  </React.StrictMode>
);