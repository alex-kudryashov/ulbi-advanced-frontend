import { classNames } from 'shared/lib';

import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTypes } from 'shared/ui/AppLink/AppLink';
import cls from './UIKitLinks.module.scss';

interface UIKitLinksProps {
    className?: string
}

export const UIKitLinks = ({ className }: UIKitLinksProps) => (
    <div className={classNames(cls.UIKitLinks, {}, [className])}>
        <h2>Links</h2>
        <div className={classNames(cls.List)}>
            <AppLink to="/">Default Link</AppLink>
            <AppLink to="/" type={AppLinkTypes.PRIMARY}>Primary Link</AppLink>
            <AppLink to="/" type={AppLinkTypes.DANGER}>Danger Link</AppLink>
        </div>
    </div>
);
