import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter } from 'react-router-dom'; // To enable routing
import App from './App'; // Import the main App component

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create the root using React 18's createRoot API
const root = createRoot(rootElement);

// Render the App component inside BrowserRouter for routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
