import {lighten, darken} from 'polished';

const primary = '#a0c6ff';
const secondary = '#f282e8';

export default {
    primary: primary,
    primaryDark: darken(0.1, primary),
    primaryLight: lighten( 0.1, primary),
    secondary: secondary,
    secondaryDark: darken(0.1, secondary),
    secondaryLight: lighten( 0.1, secondary),
}