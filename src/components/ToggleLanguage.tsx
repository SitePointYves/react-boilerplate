import i18n from '@/app/18n';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ToggleLanguage() {
  const { t } = useTranslation();

  const changeLanguage = (event: React.MouseEvent<HTMLElement>, language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <ToggleButtonGroup color="primary" onChange={changeLanguage} value={i18n.language} exclusive>
      <ToggleButton value="de">{t('Index.german')}</ToggleButton>
      <ToggleButton value="en">{t('Index.english')}</ToggleButton>
    </ToggleButtonGroup>
  );
}
