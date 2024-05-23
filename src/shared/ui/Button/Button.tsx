import { classNames } from 'shared/lib';

import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'Clear',
    PRIMARY = 'Primary',
    SECONDARY = 'Secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {},
                [cls[theme], className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
