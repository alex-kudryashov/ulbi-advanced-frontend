import { useTranslation } from 'react-i18next';

const SuspenseFallback = () => {
    const { t } = useTranslation();
    return (
        <div style={{ background: 'red' }}>{t('Loading...')}</div>
    );
};

export default SuspenseFallback;
