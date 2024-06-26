import { classNames } from 'shared/lib';

import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Login/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [className])}
        lazy
    >
        <LoginForm />
    </Modal>
);
