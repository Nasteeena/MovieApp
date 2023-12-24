import PropTypes from 'prop-types'; 

import { Autocomplete, TextField, Checkbox } from '@mui/material';

const Genres = ({ 
    genres, 
    dispatchGenre, 
    setCheckedGenre, 
    genresCheked
}) => {
    return (
        <div>
            <Autocomplete
                multiple
                disableCloseOnSelect
                id="multiple-limit-tags"
                options={genres || []}
                value={genresCheked}
                onChange={(e, value)=> {
                    dispatchGenre(setCheckedGenre(value));
                }}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField {...params} label="Genres" placeholder="Favorites" />
                )}
                sx={{ height: '400px'}}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </li>
                )}
            />
        </div>
    );
};

Genres.propTypes = {
    genres: PropTypes.array, 
    dispatchGenre: PropTypes.func,
    setCheckedGenre: PropTypes.func,
    genresCheked: PropTypes.array
};

export default Genres;