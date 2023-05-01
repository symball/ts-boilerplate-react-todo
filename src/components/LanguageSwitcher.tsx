import i18n from 'i18next';

import { i18nLanguages } from '@/lib/config';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t } = useTranslation();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>{t('language')}</InputLabel>
      <Select
        id="lang"
        label={t('language')}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        {i18nLanguages.map((lng) => {
          return (
            <MenuItem key={lng.code} value={lng.code}>
              {lng.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
