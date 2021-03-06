import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { metricsApp, addMetric } from './Store'


let store = createStore(metricsApp);

const metrics = [
  {
    name: 'YuviPanda/NamespaceEdits',
    'title': 'Edits on Main Namespace on All Wikis',
    'author': 'YuviPanda',
    'description': 'This is a description of what this metric actually does!',
    'properties': {
      usernames: {type: "usernames", title: "User Names"},
      startdate: {type: "datetime", title: "Start Time"},
      enddate: {type: "datetime", title: "End Time"},
    }
  },
  {
    'title': 'Edits in articles belonging to a wiki project',
    'name': 'Something else',
    'author': 'Someone Else',
    'description': 'This is another description of what this metric actually does!',
    'properties': {
      usernames: {type: "usernames", title: "User Names"},
      startdate: {type: "datetime", title: "Start Time"},
      enddate: {type: "datetime", title: "Start Time"},
      wikiproject: {type: "string", title: "Wikiproject Name"}
    }
  },
  {
    'title': 'Images from a category usage numbers across all wikis',
    'name': 'Neenanannsf',
    'author': 'blah blah blah',
    'description': 'This yet another is another description of what this metric actually does!',
    'properties': {
      categoryname: {type: "string", title: "Category Name (on commons)"},
    }
  }
]
metrics.forEach((metric) => store.dispatch(addMetric(metric)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
