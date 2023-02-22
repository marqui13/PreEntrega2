import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import SobreNosotros from "./pages/sobreNosotros";
import Audifonos from "./pages/Audifonos";
import RelojesInteligentes from "./pages/RelojesInteligentes";
import Drones from "./pages/Drones";
import Item from "./pages/Item";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/sobrenosotros" element={<SobreNosotros />}></Route>
      <Route path="/audifonos" element={<Audifonos />}></Route>
      <Route path="/item/:id" element={<Item />}></Route>
      <Route
        path="/relojes-inteligentes"
        element={<RelojesInteligentes />}
      ></Route>
      <Route path="/drones" element={<Drones />}></Route>
    </Routes>
  );
}

export default App;
