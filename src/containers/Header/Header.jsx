import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOCAL } from '../../utils/constants/api';

import { IconButton } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import useTheme from './../../CustomHooks/useTheme';
import useUser from '../../CustomHooks/useUser';

import ModalWindow from '../../components/Modal/Modal';
import ChangeThemeButton from './../../Ul/ChangeThemeButton/ChangeThemeButton';
import Heading from '../../components/Heading/Heading';

import styles from './Header.module.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useUser();
    const { changeTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            changeTheme(JSON.parse(savedTheme));
        }
    }, [changeTheme]);

    const btnStyle = {
        color: '#fff',
        fontSize: '1.7rem'
    };

    const openModal = () => {setOpen(true);};
    const closeModal = () => {setOpen(false);};

    const unregister = () => {
        localStorage.removeItem(LOCAL.TOKEN);
        setUserData(state => {
            return {
                ...state,
                userToken: null
            };
        });
        navigate('/auth/login');
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                        <Heading appearance='h1' className={styles.header__name}>Home</Heading>
                        <ChangeThemeButton/>
                    <div className={styles.header__btns}>
                        <IconButton style={btnStyle} onClick={openModal}>
                            <AccountCircleOutlinedIcon/>
                        </IconButton>
                    </div>
                    <ModalWindow
                        open={open}
                        onClose={closeModal}
                        handleClick={unregister}
                        btnName= 'Выйти'
                        showInput={false}
                        description='Вы хотите выйти?'
                    />
                </div>
            </div>
        </div>
        
    );
};

export default  Header;