import { grey, geekblue } from './utils/colors';
import { rhythm, scale } from './utils/typography';

export default {
    colors: {
        primary: grey,
        secondary: geekblue
    },
    spacing: {
        small: rhythm(0.5),
        medium: rhythm(1),
        large: rhythm(2)
    },
    fonts: {
        tiny: scale(0.1),
        small: scale(0.2),
        medium: scale(0.5),
        large: scale(1.5),
        h1: scale(2)
    }
}