import React, { useState } from "react";
import "../styles/components/_Collapse.scss"; // Assurez-vous que ce fichier existe au bon emplacement

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src="/Vector petite fléche blanche.png"
          alt="Flèche"
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};


export default Collapse; // Exportation par défaut