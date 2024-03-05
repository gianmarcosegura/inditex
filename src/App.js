import React, { useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { MyContext, router } from './utils';

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="App">
      <React.StrictMode>
        <MyContext.Provider value={{ favorites, setFavorites }}>
          <RouterProvider router={router} />
        </MyContext.Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
