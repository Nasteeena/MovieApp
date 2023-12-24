import ACTION_TYPES from '../actionTypes';
import INITIAL_VALUE from '../../utils/constants/initialValue';
import { SORT_TYPES } from '../../utils/constants/filtrerConst';

const initialState = {
    sortType: SORT_TYPES.POPULAR,
    years: INITIAL_VALUE.EMPTY_ARR,
    query: INITIAL_VALUE.EMPTY_STRING,
    genres: {
        genresFetched: INITIAL_VALUE.EMPTY_ARR,
        genresCheked: INITIAL_VALUE.EMPTY_ARR
    },
    pagination: {
        total: INITIAL_VALUE.TOTAL_PAGES,
        currentPage: INITIAL_VALUE.FIRST_PAGE
    }
};

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SORT_OUT:
            return { ...state, sortType: action.payload };
        case ACTION_TYPES.SET_GENRES:
            return { ...state, genres: { ...state.genres, genresFetched: action.payload } };
        case ACTION_TYPES.CHEKED_GENRES:
            return { ...state, genres: { ...state.genres, genresCheked: action.payload } };
        case ACTION_TYPES.SET_PAGE:
            return { ...state, pagination: { ...state.pagination, currentPage: action.payload } };
        case ACTION_TYPES.SET_TOTAL_PAGE:
            return { ...state, pagination: { ...state.pagination, total: action.payload } };
        case ACTION_TYPES.SET_QUERY:
            return { ...state, query: action.payload };
        case ACTION_TYPES.RESET:
            return {
                ...state,
                sortType: SORT_TYPES.POPULAR,
                years: INITIAL_VALUE.EMPTY_ARR,
                genres: { ...state.genres, genresCheked: INITIAL_VALUE.EMPTY_ARR }, 
                query: INITIAL_VALUE.EMPTY_STRING,
                pagination: { total: INITIAL_VALUE.TOTAL_PAGES, currentPage: INITIAL_VALUE.FIRST_PAGE } };
        default: return state;
    }
};

export default filterReducer;