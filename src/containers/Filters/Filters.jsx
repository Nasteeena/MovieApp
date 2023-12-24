import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useUser from '../../CustomHooks/useUser';
import INITIAL_VALUE from '../../utils/constants/initialValue';
import { COMBINED_URL } from '../../utils/constants/api';
import getRequest from '../../network/getResponse';

import { 
    setSortType, 
    setReset, 
    setGenres, 
    chekeGenre, 
    setQuery  
} from '../../store/actions/actions';

import Genres from '../../components/Filter/Genres/Genres';
import PaginationBlock from '../../components/Filter/Pagination/Pagination';
import Search from '../../components/Filter/Search/Search';
import SortFilms from '../../components/Filter/SortFilms/SortFilms';
import Heading from './../../components/Heading/Heading';

import styles from './filters.module.css';

const Filters = () => {
    const { userData } = useUser();
    const { sortType, genres, query } = useSelector(state => state.filterReducer);
    const [quaryValue, setQuaryValue] = useState(INITIAL_VALUE.EMPTY_STRING);
    const dispatch = useDispatch();

    useEffect(() => {
        setQuaryValue(query);
    }, [query]);

    const getGenres = async (token, url) => {
        const res = await getRequest(token, url);
        dispatch(setGenres(res.genres));
    };

    const getQuery = (e) => {
        const query = e.target.value;
        setQuaryValue(query);
        dispatch(setQuery(query));
    };

    useEffect(()=> {
        getGenres(userData.userToken, COMBINED_URL.GENRES);
    }, [userData.userToken]);

    const handleSortChange = (e) => {dispatch(setSortType(e.target.value));};
    const resetFilters = () => { dispatch(setReset); };

    return (
                    <div className={styles.wrapper}>
                        <Heading className={styles.filter__header} appearance='h2'>Filters:</Heading>
                        <button 
                            className={styles.filter__btn} 
                            onClick={resetFilters}
                        >
                            Reset all filters
                        </button>
                        <Search 
                            queryChange={getQuery}
                            query={quaryValue}
                        />
                        <SortFilms 
                            selectedSortType={sortType} 
                            onSortChange={handleSortChange} 
                        />
                        <Genres 
                            genres={genres.genresFetched}
                            dispatchGenre={dispatch}
                            setCheckedGenre={chekeGenre}
                            genresCheked={genres.genresCheked}
                        />
                        <PaginationBlock />
                    </div>
        );
};

export default Filters;
