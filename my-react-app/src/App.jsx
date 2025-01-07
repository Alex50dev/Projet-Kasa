import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HousingDetail from './pages/HousingDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* En-tête de l'application */}
      <Header />

      {/* Contenu principal avec les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<HousingDetail />} />
      </Routes>

      {/* Pied de page de l'application */}
      <Footer />
    </Router>
  );
}

export default App;