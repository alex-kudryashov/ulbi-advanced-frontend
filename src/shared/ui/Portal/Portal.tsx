import { createPortal } from 'react-dom';
import { FC } from 'react';

interface PortalProps {
    element?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
