import { classNames } from 'shared/lib';

import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    DEFAULT = 'Default',
    CLEAR = 'Clear',
    PRIMARY = 'Primary'
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
                [cls.Clear, cls[theme], className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
