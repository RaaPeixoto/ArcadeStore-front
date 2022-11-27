import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js';
import { AuthProvider } from './contexts/AuthContext';
import {UserProvider} from './contexts/UserContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode>
    <AuthProvider>
    <UserProvider>
    
    <App/>
    </UserProvider>
    </AuthProvider>
  </React.StrictMode>);