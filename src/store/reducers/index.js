import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import favouriteReducer from './favouriteReducer';

export default combineReducers({
    filterReducer,
    favouriteReducer
});