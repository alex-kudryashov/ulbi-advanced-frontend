import { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const context = useMemo<ThemeContextProps>(() => (
        {
            theme,
            setTheme,
        }
    ), [theme]);

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};
