import { classNames } from 'shared/lib';

import cls from './UIKitList.module.scss';
import { UIKitLinks } from './UIKitLinks';

interface UIKitListProps {
    className?: string
}

export const UIKitList = ({ className }: UIKitListProps) => (
    <div className={classNames(cls.UIKitList, {}, [className])}>
        <h1>UI Kit</h1>
        <UIKitLinks className={classNames(cls.Item)} />
    </div>
);
