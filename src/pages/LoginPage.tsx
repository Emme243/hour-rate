import { Typography } from '@mui/material';
import useTranslationByComponent from '../hooks/useTranslationByComponent';
import LoginForm from '../components/organisms/LoginForm';

function LoginPage() {
  const { tByPropName } = useTranslationByComponent('loginPage');

  return (
    <>
      <Typography variant="h3">{tByPropName('youKnowWhatToDo')} 😉</Typography>
      <LoginForm />
    </>
  );
}

export default LoginPage;
