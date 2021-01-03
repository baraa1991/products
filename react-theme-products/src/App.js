import React from "react";
import "./style.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
  }
  
  
   from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Context, ThemeContext } from "./context/ThemeContext";
import APIButton from "./components/APIButton";


export default function App() {
  return (
     <Context>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
                </Route>
              <Route path="/Products">
            <Products />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
        <APIButton/>
      <Footer />
    </Router>
      
     </Context>
     
  );
}