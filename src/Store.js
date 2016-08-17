import Immutable from 'immutable';

export const ADD_METRIC = 'ADD_METRIC';
export const SET_SEARCHTERM = 'SET_SEARCHTERM';
export const TOGGLE_METRIC_SELECTION = 'TOGGLE_METRIC_SELECTION';

export function addMetric(metric) {
    return {
        type: ADD_METRIC,
        metric: metric
    }
}

export function setSearchTerm(searchTerm) {
    return {
        type: SET_SEARCHTERM,
        searchTerm: searchTerm
    }
}

export function toggleMetricSelection(metricName) {
    return {
        type: TOGGLE_METRIC_SELECTION,
        metricName: metricName
    }
}

const initialState = Immutable.Map({
    metrics: Immutable.Map(),
    selectedMetricNames: Immutable.OrderedSet(),
    searchTerm: undefined,
});

export function metricsApp(state = initialState, action) {
    switch (action.type) {
        case ADD_METRIC:
            return state.set(
                'metrics', state.get('metrics').set(action.metric.name, action.metric)
            );
        case SET_SEARCHTERM:
            return state.set(
                'searchTerm', action.searchTerm
            );
        case TOGGLE_METRIC_SELECTION:
            let selectedMetricNames = state.get('selectedMetricNames')
            if (selectedMetricNames.has(action.metricName)) {
                selectedMetricNames = selectedMetricNames.delete(action.metricName)
            } else {
                selectedMetricNames = selectedMetricNames.add(action.metricName);
            }
            return state.set('selectedMetricNames', selectedMetricNames)
        default:
            return state;
    }
}
