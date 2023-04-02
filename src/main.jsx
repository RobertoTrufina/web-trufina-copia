import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { TrufasProvider } from './context/TrufasContext';
import './pages/Home/index';
import ProjectRoute from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrufasProvider>
      <ProjectRoute />
    </TrufasProvider>
  </React.StrictMode>,
)
