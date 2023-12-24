import { useContext } from 'react';



import { ThemeContext } from '../context/ThemeProviderContext';

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;