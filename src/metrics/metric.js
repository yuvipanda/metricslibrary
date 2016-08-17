import DateTime from 'react-datetime';
import Form from "react-jsonschema-form";
import React from 'react';

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


const Metric = ({metric}) => {
    var processed = processMetric(metric);
    return (
    <div className="metric-form">
    <div className='metric-info'>
      <h3>{metric.name}</h3>
      <h4>{metric.description}</h4>
    </div>
    <Form schema={processed.schema} uiSchema={processed.uiSchema} />
    </div>
    )
}

export default Metric;
