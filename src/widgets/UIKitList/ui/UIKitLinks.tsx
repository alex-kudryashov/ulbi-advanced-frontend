import { classNames } from 'shared/lib';

import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTypes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './UIKitLinks.module.scss';

interface UIKitLinksProps {
    className?: string
}

export const UIKitLinks = ({ className }: UIKitLinksProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.UIKitLinks, {}, [className])}>
            <h2>{t('Links')}</h2>
            <div className={classNames(cls.List)}>
                <AppLink to="/">{t('Default Link')}</AppLink>
                <AppLink to="/" type={AppLinkTypes.PRIMARY}>{t('Primary Link')}</AppLink>
                <AppLink to="/" type={AppLinkTypes.DANGER}>{t('Danger Link')}</AppLink>
            </div>
        </div>
    );
};
