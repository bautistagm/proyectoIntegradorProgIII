import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Link,  Route, Switch } from 'react-router-dom';  
import Footer from "./components/Footer/Footer";
import PeliculasGrid from "./components/PeliculasGrid/PeliculasGrid";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <BrowserRouter> 
      <>
        <Header />

        <Switch>
          <Route exact path="/favoritos" component={Favoritos}  />
          <Route exact path='/' component={Home} />
        </Switch>
        
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;