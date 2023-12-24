const API_URL = {
    ROOT_API: 'https://api.themoviedb.org/3/',
    GENRES: 'genre/movie/list',
    POPULAR: 'movie/popular',
    RATED: 'movie/top_rated',
    PAGE: '&page=',
    MOVIE: 'movie/',
    ACCOUNT: 'account/',
    ACCOUNT_ID: 'account_id',
    FAVOURITE_MOVIES: '/favorite/movies',
    POST_FAV: '/favorite',
    QUERY: 'search/movie',
    ADD_TO_QUERY: '?query=',
    QUESTION: '?',

    SHOW_FILMS: 'discover/movie'
    
};

//https://api.themoviedb.org/3/discover/movie

const COMBINED_URL = {
    POPULAR: API_URL.ROOT_API + API_URL.POPULAR + API_URL.QUESTION + API_URL.PAGE,
    RATED: API_URL.ROOT_API + API_URL.RATED + API_URL.QUESTION + API_URL.PAGE,
    GENRES: API_URL.ROOT_API + API_URL.GENRES,
    MOVIE_DETAILS: API_URL.ROOT_API + API_URL.MOVIE,
    ACCOUNT: API_URL.ROOT_API + API_URL.ACCOUNT,
    QUERY: API_URL.ROOT_API + API_URL.QUERY + API_URL.ADD_TO_QUERY
};

const API_IMG = {
    W500: 'https://image.tmdb.org/t/p/w500',
    W400: 'https://image.tmdb.org/t/p/w400'
};

const USER = {
    TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0OTZlOTVkNWRkNzQ0Njk5MjU3MTBkNzM1ZjI0NiIsInN1YiI6IjY0OTJmY2U5NjVlMGEyMDEyNWZhMGU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qswz0bLbaCCtpnv6K0kahXsAJ_qGPr9A9z1jFzahzyg'
};

const LOCAL = {
    TOKEN: 'token'
};

export { USER, API_IMG, COMBINED_URL, API_URL, LOCAL }; 