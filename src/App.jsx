import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./enventureComponent/Home";
import ConstraHomepage from "./constraComponent/pages/ConstraHomepage";
import Meuphome from "./meup/pages/meup";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constra" element={<ConstraHomepage />} />
          <Route path="/meuphome" element={<Meuphome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
