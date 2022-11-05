declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface TypographyVariants {
    soloLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    soloLabel?: React.CSSProperties;
  }

  interface Palette {
    customGray: Palette['primary'];
  }
  interface PaletteOptions {
    customGray: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    soloLabel: true;
  }
}

export {};
