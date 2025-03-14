import React from "react";
import Collapse from "../components/Collapse";
import "../styles/Pages/_About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src="/public/image 2 projet Kasa.jpg" alt="Bannière À propos" />
      </div>
      <div className="about-content">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa.</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour garantir une expérience parfaite.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa pour ses hôtes comme pour ses voyageurs.</p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;