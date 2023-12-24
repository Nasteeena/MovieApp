import ACTION_TYPES from '../actionTypes';

const initialState = {
    favourites: []
};

const favouriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_TO_FAV: 
            return {
                ...state, 
                favourites: [...state.favourites, action.payload]
            };
        case ACTION_TYPES.REMOVE_FROM_FAV: 
            return {
                ...state, 
                favourites: state.favourites.filter(item => item !== action.payload)
            };
        default:
            return state;
    }
};

export default favouriteReducer;