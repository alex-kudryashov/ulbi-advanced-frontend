import {classNames} from "shared/lib";

import cls from './Navbar.module.scss'
import {RoutePaths} from "shared/config/routeConfig";
import {AppLink} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string
}

interface NavbarListItem {
    path: string
    label: string
}

export const Navbar = ({className}: NavbarProps) => {
    const NavbarList: NavbarListItem[] = [
        {
            path: RoutePaths.home,
            label: 'Home'
        },
        {
            path: RoutePaths.about,
            label: 'About'
        },
    ]

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {NavbarList.map(item => (
                <AppLink
                    key={item.path}
                    to={item.path}
                    className={cls.Item}
                >
                    {item.label}
                </AppLink>
            ))}
        </div>
    );
};
