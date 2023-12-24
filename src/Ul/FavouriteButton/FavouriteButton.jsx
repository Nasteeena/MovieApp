import styles from './favouriteButton.module.css';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

const FavouriteButton = ({ isFavourite, ...props }) => {
    const fav = isFavourite 
    ? <StarIcon sx={{height: '100px', width: '50px', color: '#ff9800'}}/> 
    : <StarBorderIcon sx={{height: '100px', width: '50px', color: '#ff9800'}}/>;

    return (
        <>
            <IconButton {...props} className={styles.fav}>
                {fav}
            </IconButton>
        </>
    );
};

export default FavouriteButton;

FavouriteButton.propTypes = {
    isFavourite: PropTypes.bool
};