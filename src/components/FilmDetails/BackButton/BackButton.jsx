import { IconButton } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import iconBack from './../../../assets/backIcon.png';

import styles from './backButton.module.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <IconButton onClick={handleGoBack}>
            <img 
                src={iconBack} 
                alt="Icon Back" 
                className={styles.iconBack}
            />
        </IconButton>
    );
};

export default BackButton;