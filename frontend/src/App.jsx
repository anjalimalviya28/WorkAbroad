import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import HomePage from "./components/HomePage";
import Countries from "./components/Countries";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JobOportunities from "./components/JobOpportunities";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HomePage/>
      <About />
      <Services />
      <JobOportunities />
      <Countries />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};






export default App;