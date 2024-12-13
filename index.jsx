// src/index.js

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './src/App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
    <App />
  </BrowserRouter>
);
