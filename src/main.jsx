import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/output.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import AuthProvider from './AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>  
  </React.StrictMode>,
)
