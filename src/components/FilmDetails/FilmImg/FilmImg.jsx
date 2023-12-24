import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Skeleton } from '@mui/material';

import useUser from '../../../CustomHooks/useUser';

import FavouriteButton from '../../../Ul/FavouriteButton/FavouriteButton';
import { API_IMG, API_URL, COMBINED_URL } from '../../../utils/constants/api';

import { addToFavourite, removeFromFavourite } from '../../../store/actions/actions';

import postRequest from '../../../network/postResponse';

import styles from './filmImg.module.css';

const FilmImg = ({ filmImg, id, isFavourite, setIsFavourite, isLoading }) => {
    const { userData } = useUser();   
    const dispatch = useDispatch();
    const url = COMBINED_URL.ACCOUNT + id + API_URL.POST_FAV;

    const handleFavourite = async () => {
        if(isFavourite) {
            await postRequest(userData.userToken, id, url, false);
            // dispatch(removeFromFavourite(id));
            setIsFavourite(false);
        } else {
            await postRequest(userData.userToken, id, url, true);
            // dispatch(addToFavourite(id));
            setIsFavourite(true);
        }
    };

    return (
        <div className={styles.wrapper}>
            {isLoading ? 
                <Skeleton variant='rectangular' width={400} height={650}/>
            : 
            <>
                <img 
                    className={styles.mainImg} 
                    src={API_IMG.W400 + filmImg} 
                    alt="img" 
                />
                <div>
                    <FavouriteButton onClick={handleFavourite} isFavourite={isFavourite}/>
                </div>
            </>
            }
        </div>
    );
};

FilmImg.propTypes = {
    filmImg: PropTypes.string, 
    id: PropTypes.string, 
    isFavourite: PropTypes.bool, 
    setIsFavourite: PropTypes.func
};

export default FilmImg;