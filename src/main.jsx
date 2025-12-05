import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx';

import './styles/index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <Router>
        <App />
    </Router> 
  </StrictMode>
);
