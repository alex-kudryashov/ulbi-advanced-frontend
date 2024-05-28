import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRouter } from 'app/providers/RouterProvider';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib';
import { Counter } from 'entities/Counter';

const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <AppHeader />

                <Button onClick={() => setIsOpen(true)}>{t('Hello')}</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div>{t('Hello')}</div>
                </Modal>
                <Counter />

                <div className="app-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
