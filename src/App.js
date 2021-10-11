import "./App.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";

import BioPage from "./_pages/BioPage";
import BlogPage from "./_pages/BlogPage";
import ContactPage from "./_pages/ContactPage";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HomePage from "./_pages/HomePage";
import SocialSidebar from "./_components/SocialSidebar";
import WorkPage from "./_pages/WorkPage";

const App = () => {
  // const history = useHistory();

  // useEffect(() => {
  //   return history.listen((location) => {
  //     window._mfq.push(["newPageView", location.pathname]);
  //     console.log(`You changed the page to: ${location.pathname}`);
  //   });
  // }, [history]);

  return (
    <Router>
      <div className="App">
        <Header />
        <SocialSidebar />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/bio">
          <BioPage />
        </Route>
        <Route path="/work">
          <WorkPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
