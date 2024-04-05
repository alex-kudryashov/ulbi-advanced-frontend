import { classNames } from 'shared/lib';

import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './AppHeader.module.scss';

interface AppHeaderProps {
    className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => (
    <div className={classNames(cls.AppHeader, {}, [className])}>
        <Navbar className={classNames(cls.Navbar)} />
        <ThemeSwitcher />
        <LangSwitcher />
    </div>
);
