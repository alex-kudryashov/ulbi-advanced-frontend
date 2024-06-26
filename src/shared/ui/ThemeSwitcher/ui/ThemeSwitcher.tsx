import { classNames } from 'shared/lib';

import { useTheme } from 'app/providers/ThemeProvider';
import { LucideSunMoon } from 'shared/assets/icons';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <LucideSunMoon className={classNames(cls.Icon)} />
        </Button>
    );
};
