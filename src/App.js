import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './search/searchbar';
import MetricsList from './metrics/metricslist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Compute metrics from the Metrics Library!</h2>
        </div>
        <div className='row'>
        <SearchBar />
        <MetricsList />
        </div>
      </div>
    );
  }
}

export default App;
