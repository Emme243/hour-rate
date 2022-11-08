import LanguageSwitcher from '../molecules/LanguageSwitcher';
import ColorModeSwitcher from '../molecules/ColorModeSwitcher';
import { Box, Divider, IconButton, Menu, Stack, Tooltip, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState, MouseEvent } from 'react';
import useTranslationByComponent from '../../hooks/useTranslationByComponent';

function AppConfigMenu() {
  const { tByPropName } = useTranslationByComponent('app_config_menu');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Tooltip title={tByPropName('title')} placement="bottom">
        <IconButton color="primary" size="large" onClick={handleClick}>
          <SettingsOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="app-config-menu"
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
          width={280}
        >
          <Box px={3} pt={1}>
            <Typography variant="h6" textTransform="uppercase">
              {tByPropName('title')}
            </Typography>
          </Box>
          <Box px={3} pb={1}>
            <LanguageSwitcher />
          </Box>
          <Box px={3} pb={2}>
            <ColorModeSwitcher />
          </Box>
        </Stack>
      </Menu>
    </div>
  );
}

export default AppConfigMenu;
