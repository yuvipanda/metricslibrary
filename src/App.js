import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './vendor/css/bootstrap.css';
import './vendor/css/yeti.bootstrap.css';

import SearchBar from './search/searchbar';
import MetricsList from './metrics/metricslist';

class App extends Component {
  render() {
    return (
      <div>
      <div className="navbar navbar-inverse">
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand'>Metrics Library</a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <SearchBar />
          <MetricsList />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
