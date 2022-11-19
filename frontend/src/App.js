import LoginPage from "./components/LoginPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import LandingPage from "./components/LandingPage";

import { Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/socials" element={<Socials />} />
    </Routes>
  );
}
