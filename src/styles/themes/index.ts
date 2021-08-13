export const theme = {
  colors: {
    primary: '#333333',
    secondary: '#00bcf0',
    tertiary: '#ffe556',
    quaternary: '#c8412d',
    dark: '#0A1128',
    light: '#e1ebed',
  },
  font: {
    family: {
      primary:
        "'-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu', Arial, sans-serif",
      secondary: "'Merriweather', Ubuntu, sans-serif",
    },
    sizes: {
      xsmall: '.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  spacings: {
    xsmall: '.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
} as const;
