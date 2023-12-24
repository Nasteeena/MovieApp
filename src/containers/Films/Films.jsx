import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FilmList from '../../components/FilmBlock/FilmList/FilmList';
import Error from '../../components/Error/Error';

import useUser from '../../CustomHooks/useUser';

import getRequest from '../../network/getResponse';
// import { API_URL, COMBINED_URL } from '../../utils/constants/api';
import { setTotalPage } from '../../store/actions/actions';

const Films = () => {
    const dispatch = useDispatch();
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { userData } = useUser();
    const { sortType, query, genres } = useSelector(state=> state.filterReducer);
    const { currentPage } = useSelector(state=> state.filterReducer.pagination);
    const genreList = genres.genresCheked.map(i => i.id).join(',');

    const getFilms = async (token, url) => {
        setIsLoading(true);
        const res = await getRequest(token, url);
        if(res) {
            const filmsList = res.results.map((item)=> {
                return {
                    id: item.id,
                    title: item.original_title,
                    img: item.poster_path,
                    rating: item.vote_average
                };
            });
            setFilms(filmsList);
            setError(false);
            setIsLoading(false);
        } else {
            setError(true);
        }

        if(genreList || query && query.trim() !== '') {
            dispatch(setTotalPage(res.total_pages));
        } else {
            dispatch(setTotalPage(500));
        }
    };

    useEffect(()=> {
        const link = `https://api.themoviedb.org/3/discover/movie?&language=en-US&page=${currentPage}&with_text_query=${query}&sort_by=${sortType}&with_genres=${genreList}`;
        getFilms(userData.userToken, link);
    }, [userData, currentPage, sortType, genreList, query]);


    return (
        <>
            {error
                ? <Error/>
                : <FilmList isLoading={isLoading} films={films} />
            }
        </>
    );
};

export default Films;

