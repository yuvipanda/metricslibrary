import {setSearchTerm, toggleMetricSelection} from '../Store';
import SearchResults from './results';
import {connect} from 'react-redux';
import React from 'react';


const getVisibleSearchResults = (metrics, term) => {
    console.log(metrics);
    if (term === undefined) {
        return metrics;
    }
    let lowerTerm = term.toLowerCase();
    return metrics.filter(m => (
        m.name.toLowerCase().indexOf(lowerTerm) !== -1 || 
        m.description.toLowerCase().indexOf(lowerTerm) !== -1 || 
        m.title.toLowerCase().indexOf(lowerTerm) !== -1
    ))
}

const mapStateToProps = (state) => (
    {
        metrics: getVisibleSearchResults(state.get('metrics'), state.get('searchTerm'))
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onSearchTermChange: (term) => {
            dispatch(setSearchTerm(term))
        },
        onSearchResultClick: (metricName) => {
            dispatch(toggleMetricSelection(metricName))
        }
    }
)


let SearchBar = ({onSearchTermChange, onSearchResultClick, metrics}) => (
    <div className='col-md-4'>
        <form>
        <input placeholder='Type to search metrics' 
               className='form-control' type='text' 
               onChange={e => (onSearchTermChange(e.target.value))} />
        </form>
        <SearchResults metrics={metrics} onMetricClick={onSearchResultClick}/>
    </div>
)

SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default SearchBar;
