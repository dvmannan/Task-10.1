import React, { useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostTask from "./pages/PostTask";
import Layout from "./components/Layout";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={PostTask} />
        </Switch>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
