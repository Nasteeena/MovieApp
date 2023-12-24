import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Skeleton } from '@mui/material';

import { UserContext } from '../../../context/UserProviderContext';

import getRequest from '../../../network/getResponse';

import Error from '../../../components/Error/Error';
import FilmInfo from '../../../components/FilmDetails/FilmInfo/FilmInfo';
import FilmImg from '../../../components/FilmDetails/FilmImg/FilmImg';
import BackButton from '../../../components/FilmDetails/BackButton/BackButton';
import Header from '../../Header/Header';

import { COMBINED_URL, API_URL } from '../../../utils/constants/api';
import { timeToValid } from '../../../utils/helpers/helper';

import styles from './filmDetails.module.css';

const FilmDetails = () => {
    const { userData } = useContext(UserContext);
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [filmData, setFilmData] = useState([]);
    const [filmname, setFilmName] = useState(null);
    const [filmImg, setFilmImg] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fav, setFav] = useState([]);

    const getFavourites = async (token, url) => {
        const res = await getRequest(token, url);
        setFav(res.results);
    };

    useEffect(()=> {
        const url = COMBINED_URL.ACCOUNT + '20044452' + API_URL.FAVOURITE_MOVIES;
        getFavourites(userData.userToken, url);
    }, [userData]);


    useEffect(()=> {
        const favFound = fav.some(item => item.id == id);
        favFound ? setIsFavourite(true) :  setIsFavourite(false);
    }, [id, userData, fav]);

    const getFilmDetails = async (token, url) => {
        setIsLoading(true);
        const res = await getRequest(token, url);
        if(res) {
            setFilmData([
                {title: 'Year', res: new Date(res.release_date).getFullYear()},
                {title: 'Revenue', res: res.revenue},
                {title: 'Title', res: res.title},
                {title: 'Status', res: res.status},
                {title: 'Runtime', res: timeToValid(res.runtime)},
                {title: 'Description', res: res.overview},
                {title: 'Budget', res: res.budget}
            ]);
            setFilmImg(res.poster_path);
            setFilmName(res.title);
            setError(false);
            setIsLoading(false);
        } else {
            setError(true);
        }
    };

    useEffect(()=> {
        getFilmDetails(userData.userToken, COMBINED_URL.MOVIE_DETAILS + id);
    }, [id, userData.userToken]);

    return (
        <>
        <Header/>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                        <FilmImg 
                        isLoading={isLoading}
                            filmImg={filmImg} 
                            id={id}
                            isFavourite={isFavourite}
                            setIsFavourite={setIsFavourite}
                        />
                        <div className={styles.filmInfo}>
                            {isLoading ? <Skeleton className={styles.skeleton} width={200} height={70}/> : <h1 className={styles.filmInfo__name}>{filmname}</h1>}
                            {isLoading ? <Skeleton className={styles.skeleton} variant='circular' width={40} height={45} /> : <BackButton />}
                            {filmData && isLoading ? <Skeleton className={styles.skeleton} variant='rectangular' width={600} height={400} /> : <FilmInfo isLoading={isLoading} details={filmData}/>}
                        </div>
                </div>
            </div>
        </>
    );
};

export default FilmDetails;
