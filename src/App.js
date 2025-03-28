
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import { teamMembers } from "./data/actors";
import { performances } from "./data/performace";



const Donate = lazy(() => import("./pages/Donate"));
const Home = lazy(() => import("./pages/Home"));
const ActorDetails = lazy(() => import("./pages/ActorDetails"));
const Auth = lazy(() => import("./pages/Auth"));
const Show = lazy(() => import("./pages/Show"));



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
  
          <Suspense fallback={<div className="text-center py-10">Carregando...</div>}>
            <Routes>
         
              <Route path="/" element={<Home teamMembers={teamMembers} />} />
              <Route path="/actor/:id" element={<ActorDetails  teamMembers={teamMembers}/>} />
              <Route path="/doar/" element={<Donate />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/show/:id" element={<Show  performances={performances}/>} />
            </Routes>
          </Suspense>
    

        <Footer />
      </div>
    </Router>
  );
}

export default App;
