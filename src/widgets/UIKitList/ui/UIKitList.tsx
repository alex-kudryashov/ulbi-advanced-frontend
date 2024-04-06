import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import cls from './UIKitList.module.scss';
import { UIKitLinks } from './UIKitLinks';

interface UIKitListProps {
    className?: string
}

export const UIKitList = ({ className }: UIKitListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.UIKitList, {}, [className])}>
            <h1>{t('UI Kit')}</h1>
            <UIKitLinks />
        </div>
    );
};
