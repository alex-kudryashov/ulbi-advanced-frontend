import { classNames } from 'shared/lib';

import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LoginModal } from 'features/Login';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import cls from './AppHeader.module.scss';

interface AppHeaderProps {
    className?: string
}

export const AppHeader = ({ className }: AppHeaderProps) => {
    const { t } = useTranslation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const showLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (

        <div className={classNames(cls.AppHeader, {}, [className])}>
            <Navbar className={classNames(cls.Navbar)} />
            <ThemeSwitcher />
            <LangSwitcher />
            <Button onClick={showLoginModal} theme={ThemeButton.PRIMARY}>{t('Войти')}</Button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
    );
};
