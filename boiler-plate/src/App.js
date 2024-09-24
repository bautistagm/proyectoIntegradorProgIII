import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Link,  Route, Switch } from 'react-router-dom';  
import Footer from "./components/Footer/Footer";
import Favoritos from "./pages/Favoritos";
import PeliculaDetalle from './pages/PeliculaDetalle';
import SearchResults from "./pages/SearchResults";
import NotFound from './components/NotFound/NotFound';
import MejoresRateadas from "./pages/MejoresRateadas";
import Cartelera from "./pages/Cartelera";


function App() {
  return (
    <BrowserRouter> 
      <>
        <Switch>
          <Route path="/" render={(props) => <Header {...props} />} />
        </Switch>

        <Switch>
          <Route path= '/mejoresrateadas' component= {MejoresRateadas} />
          <Route path= '/cartelera' component = {Cartelera}/>
          <Route exact path="/favoritos" component={Favoritos}  />
          <Route exact path='/' component={Home} />
          <Route path="/detalle/:id" component={PeliculaDetalle} />
          <Route path="/search" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
        
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;