import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

import styles from './filmInfo.module.css';

const FilmInfo = ({ details, isLoading }) => {
    return (
        <div className={styles.filmInfo__details}>
            {isLoading ? <Skeleton variant='text'/> : <h3 className={styles.filmInfo__details__title}>Details</h3>}
            <ul className={styles.filmInfo__details__list}>
                {details.map(({title, res}) => (
                    <li key={title}>{title} : {res}</li>
                ))}
            </ul>
        </div>
    );
};

FilmInfo.propTypes = {
    details: PropTypes.array
};

export default FilmInfo;