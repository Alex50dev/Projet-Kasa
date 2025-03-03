import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import HousingDetail from "../pages/HousingDetail";
import NotFound from "../pages/NotFound";
import Header from "./Header";
import Footer from "./Footer";
import properties from "../data/logements.json";

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container" aria-label="Conteneur principal du site">
        <Header />
        
        <div className="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} title="Page d'accueil" />
            <Route path="/about" element={<About />} title="À propos de nous" />
            <Route
              path="/housing/:id"
              element={<HousingDetail properties={properties} />}
              title="Détails du logement"
            />
            <Route path="*" element={<NotFound />} title="Page introuvable" />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;