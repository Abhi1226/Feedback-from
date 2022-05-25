import { Component } from "react";
import Header from "./components/Header";
import React from "react";

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { Link } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackPage from "./Pages/FeedbackPage";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div myclass="container">
          <Routes>
            <Route exact path="/" element={<FeedbackPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
