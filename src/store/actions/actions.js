import ACTION_TYPES from '../actionTypes';

export const addToFavourite = (filmId) => ({
    type: ACTION_TYPES.ADD_TO_FAV,
    payload: filmId
});

export const removeFromFavourite = (filmId) => ({
    type: ACTION_TYPES.REMOVE_FROM_FAV,
    payload: filmId
});

export const setSortType = (sortType) => ({
    type: ACTION_TYPES.SORT_OUT,
    payload: sortType
});

export const setGenres = (genres) => ({
    type: ACTION_TYPES.SET_GENRES,
    payload: genres
});

export const chekeGenre = (genres) => ({
    type: ACTION_TYPES.CHEKED_GENRES,
    payload: genres
});

export const setPage = (page) => ({
    type: ACTION_TYPES.SET_PAGE,
    payload: page
});

export const setTotalPage = (page) => ({
    type: ACTION_TYPES.SET_TOTAL_PAGE,
    payload: page
});

export const setYears = (year) => ({
    type: ACTION_TYPES.SET_YEARS,
    payload: year
});

export const setQuery = (query) => ({
    type: ACTION_TYPES.SET_QUERY,
    payload: query
});

export const setReset = {
    type: ACTION_TYPES.RESET
};