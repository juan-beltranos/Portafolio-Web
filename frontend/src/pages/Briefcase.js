import React from "react";
import { CardPortafolio } from "../components/briefcase/CardPortafolio";
import "./css/briefcase.css";

export const Briefcase = () => {
  return (
    <div className="container">
      <h1>MIS TRABAJOS</h1>
      <div className="briefcase__grid">
        <CardPortafolio />
      </div>
    </div>
  );
};
