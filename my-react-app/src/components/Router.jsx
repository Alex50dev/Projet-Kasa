import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HousingDetail from '../pages/HousingDetail';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Footer from './Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<HousingDetail />} />
        <Route path="*" element={<NotFound />} /> {/* Gestion des erreurs de routage */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;