import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './pages/Home/index';
import ProjectRoute from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectRoute />
  </React.StrictMode>,
)
