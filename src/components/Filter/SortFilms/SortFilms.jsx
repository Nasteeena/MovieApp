import PropTypes from 'prop-types'; 

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SORT_TYPES } from '../../../utils/constants/filtrerConst';

const SortFilms = ({ selectedSortType, onSortChange }) => {
    return (
        <>
            <FormControl fullWidth margin="dense">
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort by"
                value={selectedSortType}
                onChange={onSortChange}
            >
                <MenuItem value={SORT_TYPES.POPULAR}>Popularity</MenuItem>
                <MenuItem value={SORT_TYPES.RATING}>Rating</MenuItem>
            </Select>
            </FormControl>
        </>
    );
};

SortFilms.propTypes = {
    selectedSortType: PropTypes.string,
    onSortChange: PropTypes.func
};

export default SortFilms;