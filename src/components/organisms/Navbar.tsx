import { Stack } from '@mui/material';
import hour_rate_full_logo from '../../assets/images/hour-rate-full-logo.svg';
import AppConfigMenu from './AppConfigMenu';

function Navbar() {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      component="nav"
      borderBottom="1px solid"
      borderColor={theme => theme.palette.customGray.main}
    >
      <img src={hour_rate_full_logo} alt="Hour rate logo" height={30} />
      <AppConfigMenu />
    </Stack>
  );
}

export default Navbar;
