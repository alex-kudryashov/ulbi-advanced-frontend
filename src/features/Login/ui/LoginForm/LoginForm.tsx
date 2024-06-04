import { classNames } from 'shared/lib';

import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('username')} autoFocus />
            <Input placeholder={t('password')} type="password" />
            <Button type="submit">{t('Войти')}</Button>
        </div>
    );
};
