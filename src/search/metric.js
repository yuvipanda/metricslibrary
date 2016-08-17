import React from 'react';

const SearchItemMetric = ({ name, title, description, onClick}) => (
    <li onClick={e => (onClick(name))} className='searchItemMetric'>
        <strong>{title}</strong>
        <p>{description}</p>
    </li>
)

export default SearchItemMetric
