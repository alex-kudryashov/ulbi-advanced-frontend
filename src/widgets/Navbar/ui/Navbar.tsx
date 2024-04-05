import { classNames } from 'shared/lib';

import { RoutePaths } from 'shared/config/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

interface NavbarListItem {
    path: string
    label: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const NavbarList: NavbarListItem[] = [
        {
            path: RoutePaths.home,
            label: t('Главная'),
        },
        {
            path: RoutePaths.about,
            label: t('О нас'),
        },
    ];

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Suspense fallback="sdfsfdsdf">
                {NavbarList.map((item) => (
                    <AppLink
                        key={item.path}
                        to={item.path}
                        className={cls.Item}
                    >
                        {item.label}
                    </AppLink>
                ))}
            </Suspense>
        </div>
    );
};
