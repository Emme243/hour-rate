import './../interfaces/MuiStyleOverridesInterface';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode, useContext, useMemo } from 'react';
import { ColorModeContext } from './ColorModeContextProvider';
import { grey } from '@mui/material/colors';
import SilkaThin from '../assets/fonts/silka/silka-thin-webfont.ttf';
import SilkaExtraLight from '../assets/fonts/silka/silka-extralight-webfont.ttf';
import SilkaLight from '../assets/fonts/silka/silka-light-webfont.ttf';
import SilkaRegular from '../assets/fonts/silka/silka-regular-webfont.ttf';
import SilkaMedium from '../assets/fonts/silka/silka-medium-webfont.ttf';
import SilkaSemiBold from '../assets/fonts/silka/silka-semibold-webfont.ttf';
import SilkaBold from '../assets/fonts/silka/silka-bold-webfont.ttf';
import SilkaBlack from '../assets/fonts/silka/silka-black-webfont.ttf';

function MuiContextProvider({ children }: { children: ReactNode }) {
  const { muiColorMode } = useContext(ColorModeContext);
  const isDarkMode = muiColorMode === 'dark';
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ['Silka', 'sans-serif', 'Arial'].join(','),
          fontSize: 14,
          soloLabel: {
            letterSpacing: 3,
            fontWeight: 500,
            fontSize: 14,
            color: isDarkMode ? grey[300] : grey[600],
            textTransform: 'uppercase',
          },
        },
        palette: {
          customGray: {
            main: isDarkMode ? grey[600] : grey[300],
          },
          mode: muiColorMode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              '@font-face': [
                { fontFamily: 'Silka', src: `url(${SilkaThin})`, fontWeight: 100 },
                { fontFamily: 'Silka', src: `url(${SilkaExtraLight})`, fontWeight: 200 },
                { fontFamily: 'Silka', src: `url(${SilkaLight})`, fontWeight: 300 },
                { fontFamily: 'Silka', src: `url(${SilkaRegular})`, fontWeight: 400 },
                { fontFamily: 'Silka', src: `url(${SilkaMedium})`, fontWeight: 500 },
                { fontFamily: 'Silka', src: `url(${SilkaSemiBold})`, fontWeight: 600 },
                { fontFamily: 'Silka', src: `url(${SilkaBold})`, fontWeight: 700 },
                { fontFamily: 'Silka', src: `url(${SilkaBlack})`, fontWeight: 900 },
              ],
            },
          },
          MuiContainer: {
            defaultProps: {
              fixed: true,
            },
            styleOverrides: {
              root: {
                minHeight: '100vh',
              },
            },
          },
          MuiToggleButtonGroup: {
            defaultProps: {
              size: 'small',
              color: 'primary',
            },
          },
          MuiTextField: {
            defaultProps: {
              size: 'small',
            },
          },
        },
        breakpoints: {
          values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
          },
        },
      }),
    [muiColorMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiContextProvider;
