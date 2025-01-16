import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About";
import HousingDetail from '../pages/HousingDetail';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Footer from './Footer';

const AppRouter = () => {
  return (
    <Router>
      {/* Navigation principale */}
      <header>
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </header>

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Route pour les pages non trouvées */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </Router>
  );
};


export default AppRouter;