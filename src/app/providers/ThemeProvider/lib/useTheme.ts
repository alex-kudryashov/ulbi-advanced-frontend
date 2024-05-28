import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

        setTheme(newTheme);
    };

    useEffect(() => {
        (Object.keys(Theme) as Array<keyof typeof Theme>).forEach((themeClass) => {
            document.body.classList.remove(Theme[themeClass]);
        });
        document.body.classList.add(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return { theme, toggleTheme };
};
