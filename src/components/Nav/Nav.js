import React from "react";
import logo from "../../assets/img/Logo2-Blanco-con-borde.svg";
import SearchForm from "../SearchForm/SearchForm.js";
import { useLocation } from "wouter";

export default function Nav() {
  const [, setLocation] = useLocation();
  return (
    <nav className="nav">
      <div
        className="logo"
        onClick={() => {
          setLocation("/");
        }}
      >
        <img src={logo} alt="Logo DGB-Development" />
        <span> DGB Development</span>
      </div>
      <SearchForm />
      <div className="nav-bar">
        <h1>Buscador de GIFS</h1>
      </div>
    </nav>
  );
}
