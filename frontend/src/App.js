import LoginPage from "./components/LoginPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import LandingPage from "./components/LandingPage";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';

export default function App() {
  return (
    <Routes>
            <Route exact path="/"> <LandingPage/> </Route>
            <Route path="/login"> <LoginPage/> </Route>

            <Route path="/social"> <Socials/> </Route>
            <Route path="/content"> <Content/> </Route>

    </Routes>
  );
}
