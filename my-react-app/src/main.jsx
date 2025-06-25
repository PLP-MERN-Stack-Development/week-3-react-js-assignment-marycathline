import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext'; // importing ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/*  Wraped App with ThemeProvider */}
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
