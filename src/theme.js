import { blue, grey, geekblue } from './utils/colors';
import { rhythm, scale } from './utils/typography';

export default {
    colors: {
        primary: grey[7],
        background:{
            primary: grey[0],
            secondary: geekblue[4]
        }
    },
    spacing: {
        small: rhythm(0.5),
        medium: rhythm(1),
        large: rhythm(2)
    },
    fonts: {
        small: scale(0.3),
        medium: scale(1),
        large: scale(1.5),
        h1: scale(2)
    }
}