import { UIKitList } from 'widgets/UIKitList';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Modal } from 'shared/ui/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

const HomePage = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <BugButton />
            <UIKitList />
            <Button onClick={() => setIsOpen(true)}>{t('Hello')}</Button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>{t('Hello')}</div>
            </Modal>
        </div>
    );
};
export default HomePage;
