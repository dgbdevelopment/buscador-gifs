import React from "react";
import bg from "../../assets/img/bg-home.svg";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="Home-content">
      <img src={bg} alt="Logo DGB Development" />
      <div className="text-content">
        <h1>Buscardor de gifs animados</h1>
        <p>
          Encuentra tu gif favorito y descárgalo de forma rápida pulsando en{" "}
          <span className="material-icons">get_app</span>
        </p>
        <Link to={"/trends"}>Tendencias</Link>
      </div>
    </div>
  );
}
