import React from 'react'
import Metric from './metric'
import {connect} from 'react-redux';
import './metric.css';

let MetricsList = ({metrics}) => (
    <div className='col-md-8'>
    {metrics.map(metric => (<Metric metric={metric} />))}
    </div>
)

let mapStateToProps = (state) => ({
    metrics: state.get('selectedMetricNames').toSeq().map(
        name => (state.get('metrics').get(name))
    )
})

MetricsList = connect(mapStateToProps)(MetricsList)

export default MetricsList;
