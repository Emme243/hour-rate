import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { MouseEvent } from 'react';
import { LANGUAGES } from '../../constants/Languages';
import useTranslationByComponent from '../../hooks/useTranslationByComponent';

function LanguageSwitcher() {
  const { tByPropName, i18n } = useTranslationByComponent('language_switcher');
  function changeLanguage(_: MouseEvent<HTMLElement>, lng: string) {
    if (lng !== null) void i18n.changeLanguage(lng);
  }

  return (
    <Stack direction="column">
      <Typography variant="soloLabel" mb={1}>
        {tByPropName('language')}
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={i18n.language}
        onChange={changeLanguage}
        orientation="vertical"
      >
        {Object.keys(LANGUAGES).map(languageKey => (
          <ToggleButton key={languageKey} value={languageKey}>
            <Typography textTransform="capitalize">{LANGUAGES[languageKey].nativeName}</Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default LanguageSwitcher;
