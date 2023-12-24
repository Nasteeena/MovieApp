import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import FilmCard from '../FilmCard/FilmCard';

import styles from './filmList.module.css';

const FilmList = ({ films, isLoading }) => {

    return (
        <div className={styles.wrapper}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid 
                    container spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                {films && 
                films.map(({ id, title, img, rating }) => (
                    <Grid item xs={2} sm={4} md={4} key={id}>
                        <FilmCard 
                            rating={rating}
                            img={img}
                            filmName={title}
                            id={id}
                            isLoading={isLoading}
                        />
                    </Grid>
                ))
                }
                </Grid>
            </Box>
        </div>
    );
};

FilmList.propTypes = {
    films: PropTypes.array
};

export default FilmList;