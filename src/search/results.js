import React from 'react';
import SearchItemMetric from './metric'
import './search.css';

const SearchResults = ({metrics, onMetricClick}) => (
    <ul id='searchResults'>
        {metrics.map(metric =>
            <SearchItemMetric 
                name={metric.name}
                title={metric.title}
                description={metric.description}
                onClick={onMetricClick}
                />
        )}
    </ul>
)

export default SearchResults;
