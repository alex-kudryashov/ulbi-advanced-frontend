import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>
                {t('Что-то пошло не так')}
                ...
            </h1>
            <Button onClick={reloadPage}>{t('Перезагрузить')}</Button>
        </div>
    );
};
