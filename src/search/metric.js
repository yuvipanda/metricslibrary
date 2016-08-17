import React from 'react';

const SearchItemMetric = ({ name, title, description, onClick}) => (
    <li onClick={e => (onClick(name))} className='searchItemMetric'>
        <h4>{title}</h4>
        <p>{description}</p>
    </li>
)

export default SearchItemMetric
