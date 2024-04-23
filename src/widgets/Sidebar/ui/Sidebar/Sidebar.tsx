import { classNames } from 'shared/lib';

import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { LucideSunMoon } from '../../../../shared/assets/icons';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setIsCollapsed((state) => !state);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.Collapsed]: isCollapsed }, [className])}
        >
            <Button onClick={onToggle} theme={ThemeButton.PRIMARY} data-testid="sidebar-toggle">{t('Toggle')}</Button>
            <LucideSunMoon />
        </div>
    );
};
