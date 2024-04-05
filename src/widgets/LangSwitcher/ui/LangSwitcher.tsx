import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {i18n.language}
        </Button>
    );
};
