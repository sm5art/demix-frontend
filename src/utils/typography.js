import Typography from "typography"

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.57,
  headerFontFamily: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
  bodyFontFamily: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;