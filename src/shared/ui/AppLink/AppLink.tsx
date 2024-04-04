import {classNames} from "shared/lib";

import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTypes {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    DANGER = 'danger'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    type?: AppLinkTypes
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        type = AppLinkTypes.DEFAULT,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[type]])}
            {...otherProps}
        >

        </Link>
    );
};
