import { useTranslation } from 'react-i18next';

const AboutView = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <h1>{t('О нас')}</h1>
        </div>
    );
};

export default AboutView;
