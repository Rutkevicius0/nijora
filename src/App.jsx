import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import { Switch, Route } from 'react-router';
import { ChooseService } from './pages/ChooseService';
import { Supirkimas } from './pages/Supirkimas';
import { Prekyba } from './pages/Prekyba';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/prekyba" component={Prekyba} />
          <Route exact path="/supirkimas" component={Supirkimas} />
          <Route exact path="/" component={ChooseService} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
