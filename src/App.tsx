import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />

        </Route>
        <Route exact path="/about">
          <About />

        </Route>
        <Route exact path="/portfolio">
          <Portfolio />

        </Route>

      </Switch>
    </div>
  );
}

export default App;
