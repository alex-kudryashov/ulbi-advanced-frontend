import {classNames} from "shared/lib";

import cls from './AppHeader.module.scss'
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface AppHeaderProps {
    className?: string
}

export const AppHeader = ({className}: AppHeaderProps) => {
    return (
        <div className={classNames(cls.AppHeader, {}, [className])}>
            <Navbar className={classNames(cls.Navbar)} />
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};
