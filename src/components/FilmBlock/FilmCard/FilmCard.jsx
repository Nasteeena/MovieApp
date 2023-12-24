import { useEffect, useState } from 'react';
import {
    Card, 
    CardContent, 
    CardMedia, 
    Typography,
    IconButton,
    Skeleton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useUser from '../../../CustomHooks/useUser';

import FavouriteButton from '../../../Ul/FavouriteButton/FavouriteButton';
import postRequest from '../../../network/postResponse';
import getRequest from '../../../network/getResponse';

import { API_IMG, COMBINED_URL, API_URL  } from '../../../utils/constants/api';

import styles from './FilmCard.module.css';

const FilmCard = ({ rating, filmName, img, id, isLoading }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const { userData } = useUser();  
    const url = COMBINED_URL.ACCOUNT + id + API_URL.POST_FAV;
    const [fav, setFav] = useState([]);

    const getFavourites = async (token, url) => {
        const res = await getRequest(token, url);
        setFav(res.results);
    };

    useEffect(()=> {
        const url = COMBINED_URL.ACCOUNT + '20044452' + API_URL.FAVOURITE_MOVIES;
        getFavourites(userData.userToken, url);
    }, [userData]);


    const handleFavourite = async () => {
        if(isFavourite) {
            await postRequest(userData.userToken, id, url, false);
            setIsFavourite(false);
        } else {
            await postRequest(userData.userToken, id, url, true);
            setIsFavourite(true);
        }
    };

    useEffect(()=> {
        const favFound = fav?.some(item => item.id == id);
        favFound ? setIsFavourite(true) :  setIsFavourite(false);
    }, [id, fav]);

    return (
        <>
        {isLoading
        ? <Skeleton className={styles.skeleton_main} variant='rectangular' width={200} height={400}/> 
        : 
        <Card sx={{ width: 200, height: 400, p: '0', background: 'var(--theme-default-card)' }}>
            {isLoading
            ? <Skeleton variant='rectangular' width={200} height={400}/> 
            : 
            <CardMedia
                    sx={{ 
                        objectPosition: 'center center', 
                        objectFit: 'contain' 
                    }}
                    image={ img ? API_IMG.W400 + img : 'https://via.placeholder.com/400x600'}
                    alt={filmName}
                    component="img"
                />
            }
                <CardContent 
                    style={{display: 'flex', flexDirection: 'column' }}
                    sx={{p: '0', m: '0'}}
                >
                    <Typography 
                        gutterBottom 
                        component="div" 
                        sx={{height: '30px', p: '10px 5px 20px 5px'}}
                        >
                        {filmName}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{
                            p: '25px 5px 0px 5px', 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        Rating: {rating}
                    <Link to={`/movie/${id}`}>
                        <IconButton>
                            <InfoIcon />
                        </IconButton>
                    </Link> 
                        <FavouriteButton onClick={handleFavourite} isFavourite={isFavourite}/>
                    </Typography>
                </CardContent>
            </Card>
        }
            
        </>
        
    );
};

FilmCard.propTypes = {
    rating: PropTypes.number,
    filmName: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number
};

export default FilmCard;