import React, { Component } from 'react';
import './App.css';
import Header from './shared/components/Header';
import { BrowserRouter, Route } from "react-router-dom";
import EventForm from './components/Event/EventForm';
import Events from './components/Event/Events';

class App extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Route exact path="/" component={Events} />
              <Route exact path="/edit" component={EventForm} />
              <Route exact path="/add" component={EventForm} />
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
