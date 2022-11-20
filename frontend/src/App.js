import LoginPage from "./components/LoginPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import React from "react";


import { initializeDB } from "./api/firebaseConfig";
import HomePage from "./components/HomePage";

function App() {

  // Initializing Firebase DB connection
  let DBapp = initializeDB();

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/socials" element={<Socials />} />
      <Route exact path="/landingpage" element={<LandingPage />} />
      <Route exact path="/content" element={<Content />} />
      <Route exact path="/login" element={<LoginPage />} />


    </Routes>
  );
}
