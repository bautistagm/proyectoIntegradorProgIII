import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Link,  Route, Switch } from 'react-router-dom';  
import Footer from "./components/Footer/Footer";
import PeliculasGrid from "./components/PeliculasGrid/PeliculasGrid";
import Favoritos from "./pages/Favoritos";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./pages/SearchResults";
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter> 
      <>
        <Switch>
          <Route path="/" render={(props) => <Header {...props} />} />
        </Switch>

        <Switch>
          <Route exact path="/favoritos" component={Favoritos}  />
          <Route exact path='/' component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
        
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;