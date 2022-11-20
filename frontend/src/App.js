import LoginPage from "./components/LoginPage";
import Socials from "./components/Socials";
import Content from "./components/Content";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";

import { Routes, Route } from "react-router-dom";
import React from "react";


// import { initializeDB } from "./api/firebaseConfig";
import HomePage from "./components/HomePage";

import { createEntity, getEntity, getAllEntities, deleteEntity, updateEntity } from "./database";
import { determineMatches } from './logic/matching';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const connection = initializeApp(
  {
      apiKey: "AIzaSyDXe2KCGZH6XJz3kg2CQCKzxc3QljDk77M",
      authDomain: "cloakd-a2095.firebaseapp.com",
      projectId: "cloakd-a2095",
      storageBucket: "cloakd-a2095.appspot.com",
      messagingSenderId: "145106214933",
      appId: "1:145106214933:web:3511a59dfe1896753b6e1c",
      measurementId: "G-TRVR4EKP6X",
      databaseURL: "https://cloakd-a2095-default-rtdb.firebaseio.com",
      }
);

const analytics = getAnalytics(connection);
const database = getDatabase(connection);

function App() {

  //createEntity('applicant', 3, {first: 'alex', last: 'dalgleish-morel'});
  //getEntity('applicant', 3).then((snapshot) => console.log(snapshot.val()));
  //deleteEntity('applicant', 56);
  //updateEntity('applicant', 3, {something: 'else'});

  createEntity('applicant', 4, {
    "confidential": {
    "name": {
        "first": "Alex",
        "last": "Dalgleish-Morel"
      },
    "location": {
        "country": "Canada",
        "state": "Alberta",
        "city": "Calgary"
      },
    "age": 22,
    "educational_institution": [
        "University of Calgary"
      ]
    },
    "education": {
    "degree": [
        {
        "title": "Bachelor of Science",
        "major": "Computer Science"
        }
      ]
    },
    "experience": [
      {
        "job_title": "Software Developer",
        "industry": "Technology",
        "description": "Coded...",
        "years": 4
      },
      {
        "job_title": "Business Analyst",
        "industry": "Oil and Gas",
        "description": "Analyzed...",
        "years": 3
      }
    ],
    "project": [
      {
        "title": "AI Scheduler",
        "description": "Scheduled..."
      },
      {
        "title": "Air Hockey Game",
        "description": "Air hockey..."
      }
    ],
    "seeking_industry": [
        "Technology"
    ],
    "skills": [
        "Python"
    ],
    "languages": [
      "English"
    ],
    "minimum_salary": 100000,
    "total_years_experience": 0
  });

  determineMatches(1);
  // Initializing Firebase DB connection
  // let DBapp = initializeDB();

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/socials" element={<Socials />} />
      <Route exact path="/landingpage" element={<LandingPage />} />
      <Route exact path="/content" element={<Content />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/main" element={<MainPage />} />


    </Routes>
  );
}
export default App

