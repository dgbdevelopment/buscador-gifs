import React from "react";
import Nav from "./components/Nav/Nav";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { Route } from "wouter";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <section className="App-content">
        <Route exact path={"/"} component={Home} />
        <Route path={"/search/:keyword"} component={ListOfGifs} />
        <Route path={"/trends"} component={ListOfGifs} />
        <Route path={"/buscador-gifs"} component={Home} />
      </section>
    </div>
  );
}
