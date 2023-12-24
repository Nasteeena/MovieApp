import Sun from './Sun.svg';
import Moon from './Moon.svg';

import { useState, useEffect } from 'react';

import useTheme from './../../CustomHooks/useTheme';
import { THEME } from './../../utils/constants/themeConst';

import styles from './ChangeThemeButton.module.css';

const ChangeThemeButton = () => {
    const { changeTheme, theme } = useTheme();

    useEffect(()=> {
        if(theme === THEME.LIGHT) {
            changeTheme(THEME.DARK);
        } else {
            changeTheme(THEME.LIGHT);
        }
    }, [changeTheme, theme]);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            changeTheme(THEME.DARK);
        } else {
            changeTheme(THEME.LIGHT);
        }
    };

    return (
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                checked={theme === THEME.DARK}
                onChange={handleChange}
            />
            <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
                <img className= {styles.sun} src={Sun} alt="sun" />
                <img className={styles.moon} src={Moon} alt="moon" />
            </label>
        </div>
    );
};

export default ChangeThemeButton;
