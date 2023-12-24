import { createContext, useState, useEffect } from 'react';

import {changeColours} from './../utils/helpers/changeColours';
import { THEME } from './../utils/constants/themeConst';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : THEME.LIGHT;
    });

    useEffect(() => {
        changeColours(theme);
    }, [theme]);

    const changeTheme = theme => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};