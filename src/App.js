import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './Home';
import Detail from './Detail';
import Favourites from './Favourites';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Detail} />
          <Route path="/favorites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
