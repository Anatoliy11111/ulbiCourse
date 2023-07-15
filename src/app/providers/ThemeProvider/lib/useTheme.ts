import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    toggleTheme: ()=>void
    theme:Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const updateTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(updateTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updateTheme);
    };

    return { theme, toggleTheme };
}
