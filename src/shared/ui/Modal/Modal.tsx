import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';

import { ClassNamesMods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 100;

export const Modal:FC<ModalProps> = (props) => {
    const {
        children, className, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const animationTimeoutRef = useRef(null);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        animationTimeoutRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(animationTimeoutRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: ClassNamesMods = {
        [cls.Open]: isOpen,
        [cls.Closing]: isClosing,
    };

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={classNames(cls.Overlay)} onClick={handleClose}>
                    <div className={classNames(cls.Content)} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
