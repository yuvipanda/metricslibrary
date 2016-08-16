import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateTime from 'react-datetime';
import Form from "react-jsonschema-form";

const propMappings = {
  'datetime': {
    'type': 'string',
    'widget': (props) => {
      return (
        <DateTime value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)}
        / >
      )
    }
  },
  'usernames': {
    'type': 'string',
    'widget': 'textarea'
  }
}

function processMetric(metric) {
  var newProps = {};
  var uiSchema = {};
  for (var propName in metric.properties) {
    var prop = JSON.parse(JSON.stringify(metric.properties[propName]));
    if (propMappings[prop.type]) {
      const mapping = propMappings[prop.type];
      prop.type = mapping.type;
      uiSchema[propName] = {
        'ui:widget': mapping.widget
      }
    }
    newProps[propName] = prop;
  }
  return {
    schema: {
      properties: newProps,
      type: "object",
    //  title: "wat",
      //description: metric.description
    },
    uiSchema: uiSchema
  }
}
const metrics = [
  {
    'name': 'Namespace Edits',
    'author': 'YuviPanda',
    'description': 'This is a description of what this metric actually does!',
    'properties': {
      usernames: {type: "usernames", title: "User Names"},
      startdate: {type: "datetime", title: "Start Time"}
    }
  },
  {
    'name': 'Something else',
    'author': 'Someone Else',
    'description': 'This is another description of what this metric actually does!',
    'properties': {
      usernames: {type: "usernames", title: "User Names"},
      startdate: {type: "datetime", title: "Start Time"},
      enddate: {type: "datetime", title: "Start Time"}
    }
  }
]

class MetricsList extends Component {
  constructor() {
    super();
    this.state = {
      expanded_metrics: [],
    }
  }
}
class Metric extends Component {
  constructor () {
    super();
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({expanded: !this.state.expanded});
  }
  render () {
    var processed = processMetric(this.props.metric);
    return (
      <div className="metric-form col-md-6 col-md-offset-3">
        <div className='metric-info'>
          <h3>{this.props.metric.name}</h3>
          <h4>{this.props.metric.description}</h4>
        </div>
        <Form schema={processed.schema} uiSchema={processed.uiSchema} />
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Compute metrics from the Metrics Library!</h2>
        </div>
        <Metric metric={metrics[0]} />
      </div>
    );
  }
}

export default App;
