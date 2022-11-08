import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material';
import useTranslationByComponent from '../hooks/useTranslationByComponent';
import DIGIMONS from '../data/digimons.json';

const DIGIMON_NAMES: string[] = DIGIMONS.map(digimon => digimon.name).sort();

function LoginPage() {
  const { tByPropName } = useTranslationByComponent('loginPage');

  return (
    <>
      <Typography variant="h3">{tByPropName('youKnowWhatToDo')} 😉</Typography>
      <Stack direction="row" justifyContent="space-between" spacing={2} mt={2}>
        <TextField fullWidth type="text" label={tByPropName('username')} />
        <TextField fullWidth type="password" label={tByPropName('password')} />
        <Autocomplete
          fullWidth
          disablePortal
          options={DIGIMON_NAMES}
          renderInput={params => <TextField {...params} label={tByPropName('digimonYouHate')} />}
        />
      </Stack>
      <Box textAlign="right" mt={3}>
        <Button variant="contained" type="submit">
          {tByPropName('submit')}
        </Button>
      </Box>
    </>
  );
}

export default LoginPage;
