import { geekblue, purple } from './utils/colors';
import { rhythm, scale } from './utils/typography';

const grey = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#e8e8e8',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#262626',
  '#000000',
];

export default {
  colors: {
    primary: geekblue,
    secondary: purple,
    textPrimary: grey,
  },
  spacing: {
    tiny: rhythm(0.2),
    small: rhythm(0.5),
    medium: rhythm(1),
    large: rhythm(2),
  },
  fonts: {
    tiny: scale(0.1),
    small: scale(0.2),
    medium: scale(0.5),
    large: scale(1.3),
    h1: scale(1.5),
  },
};
