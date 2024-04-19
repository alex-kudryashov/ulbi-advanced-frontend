import { classNames } from 'shared/lib';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <span className={classNames(cls.Loader, {}, [className])} />
);
