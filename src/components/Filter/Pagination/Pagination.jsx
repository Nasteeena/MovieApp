import  PropTypes  from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../../store/actions/actions';

import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaginationBlock = () => {
    const { total, currentPage } = useSelector(state => state.filterReducer.pagination);
    const dispatch = useDispatch();

    return (
        <Stack spacing={2}>
            <Pagination
                count={total}
                page={currentPage}
                onChange={(event, value)=> dispatch(setPage(value))}
                renderItem={(item) => (
            <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
            />
                )}
            />
        </Stack>
    );
};

PaginationBlock.propTypes = {
    currentPage: PropTypes.number
};

export default PaginationBlock;