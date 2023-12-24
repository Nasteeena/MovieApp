import { 
    TextField, 
    Modal, 
    Typography, 
    Button, 
    Box 
} from '@mui/material';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 25,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
};

const ModalWindow = ({ 
    open, 
    onClose,
    handleClick,
    btnName,
    placeholder,
    showInput = true,
    description
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography 
                    style={{marginBottom: '15px'}} 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2"
                >
                    {description}
                </Typography>
                {showInput &&
                    <TextField 
                        id="standard-basic" 
                        placeholder={placeholder} 
                        variant="standard"
                    />
                }
                <Button
                    onClick={handleClick} 
                    variant="outlined" 
                    style={{marginTop: '25px'}}
                >{btnName}
                </Button>
            </Box>
        </Modal>
    );
};

ModalWindow.propTypes = {
    open: PropTypes.bool, 
    handleClick: PropTypes.func,
    btnName: PropTypes.string,
    btnDescription: PropTypes.string,
    showInput: PropTypes.bool,
    onClose: PropTypes.func,
    description: PropTypes.string
};

export default ModalWindow;