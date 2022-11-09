import { Controller, useForm } from 'react-hook-form';
import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material';
import DIGIMONS from '../../data/digimons.json';
import useTranslationByComponent from '../../hooks/useTranslationByComponent';

interface IForm {
  digimon: string;
  password: string;
  username: string;
}

const DIGIMON_NAMES: string[] = DIGIMONS.map(digimon => digimon.name).sort();

function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IForm>({
    defaultValues: { username: '', password: '', digimon: '' },
  });
  function onSubmit(data: IForm) {
    console.log(data);
  }

  const { tByPropName } = useTranslationByComponent('loginForm');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" justifyContent="space-between" spacing={2} mt={2}>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              type="text"
              label={tByPropName('username')}
              error={Boolean(error)}
              required
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              type="password"
              label={tByPropName('password')}
              error={Boolean(error)}
              required
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="digimon"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Autocomplete
              fullWidth
              disablePortal
              options={DIGIMON_NAMES}
              value={value}
              onChange={(_, value) => onChange(value)}
              renderInput={params => (
                <TextField
                  {...params}
                  error={Boolean(error)}
                  label={tByPropName('digimonYouHate')}
                  required
                />
              )}
            />
          )}
          rules={{ required: true }}
        />
      </Stack>
      <Box textAlign="right" mt={3}>
        <Button variant="contained" type="submit" disabled={!isValid}>
          {tByPropName('submit')}
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
