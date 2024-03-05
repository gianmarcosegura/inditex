import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
