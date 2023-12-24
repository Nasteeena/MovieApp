import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = ({ queryChange, query }) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {  width: '100%' }
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                id="filled-basic" 
                label="Type the film" 
                variant="filled" 
                onChange={queryChange}
                value={query}
            />
        </Box>
    );
};

export default Search;