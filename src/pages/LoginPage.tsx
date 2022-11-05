import { Button, TextField, Typography } from '@mui/material';

function LoginPage() {
  return (
    <>
      <Typography variant="h3">Enter your credentials</Typography>
      <TextField type="text" />
      <Button href="/not-found">Ir a not found</Button>
    </>
  );
}

export default LoginPage;
