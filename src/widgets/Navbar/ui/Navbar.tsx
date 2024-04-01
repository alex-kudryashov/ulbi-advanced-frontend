import {classNames} from "shared/lib";

import cls from './Navbar.module.scss'
import {RoutePaths} from "shared/config/routeConfig";
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTypes} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePaths.home} className={cls.Item}>Go Home</AppLink>
            <AppLink to={RoutePaths.about} className={cls.Item} type={AppLinkTypes.DANGER}>Go About</AppLink>
        </div>
    );
};
