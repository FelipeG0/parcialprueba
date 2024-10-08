// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import SportCards from './Components/SportCards';
import { getUserData } from './Service/UserService';


function App() {
  const userData = getUserData();  // Cargamos los datos del usuario y deportes

  return (
    <Router>
      <Routes>
        {/* Ruta del login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta del home */}
        <Route 
          path="/home" 
          element={
            <div className="app">
              <header className="user-info">
                <UserProfile user={userData} />
              </header>
              <main className="content">
                <SportCards sportsData={userData.sportsData} />
              </main>
            </div>
          } 
        />

        {/* Ruta por defecto: redirige al login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
