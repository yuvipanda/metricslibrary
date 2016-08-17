import React from 'react'
import Metric from './metric'
import {connect} from 'react-redux';
import './metric.css';

let emptyMessage = <h4 className='metrics-empty'>
    Select metrics from the left sidebar to start computing them!
</h4>

let MetricsList = ({metrics}) => {
    let contents;
    if (metrics.count() === 0) {
        contents = emptyMessage;
    } else {
        contents = metrics.map(metric => <Metric metric={metric} />)
    }
    return <div className='col-md-8'>
    {contents}
    </div>
}

let mapStateToProps = (state) => ({
    metrics: state.get('selectedMetricNames').toSeq().map(
        name => (state.get('metrics').get(name))
    )
})

MetricsList = connect(mapStateToProps)(MetricsList)

export default MetricsList;
