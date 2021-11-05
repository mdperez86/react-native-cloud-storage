import {DefaultTheme} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primaryShade3: '#244CAA',
  primaryShade2: '#2D60D6',
  primaryShade1: '#336DF3',
  primary: '#447BFB',
  primaryTint1: '#89AAFA',
  primaryTint2: '#ABC3FC',
  primaryTint3: '#DDE6FF',
  primaryTint4: '#E8EFFF',
  secondary: '#FF5495',
  gray: {
    20: '#242833',
    45: '#5D6373',
    58: '#7E8494',
    73: '#959FBA',
    88: '#D3D7E0',
    98: '#EDF1FA',
    99: '#F5F7FC',
  },
  white: '#FFFFFF',
  teal: '#00BCD4',
  tealTint: '#E8F9FB',
  yellow: '#FFC107',
  yellowTint: '#FFF5D7',
  brown: '#8D6E63',
  brownTint: '#F1EDEB',
  blue: '#2196F3',
  blueTint: '#EBF6FE',
  green: '#4AC367',
  greenTint: '#E8F7EB',
  violet: '#DA5DF5',
  violetTint: '#FAE2FF',
  transparent: 'transparent',
  shadowColor: '#242833',
  // shadowColor: '#8385a3',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,

  h1: 34,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 16,
  body2: 15,
  tab: 13,
  subhead: 14,
  caption: 12,
  button: 16,

  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.h1,
    lineHeight: 46,
  },
  h2: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.h2,
    lineHeight: 33,
  },
  h3: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.h3,
    lineHeight: 27,
  },
  h4: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.h4,
    lineHeight: 25,
  },
  body1: {
    fontFamily: 'Metropolis-Medium',
    fontSize: SIZES.body1,
    lineHeight: 22,
  },
  body2: {
    fontFamily: 'Metropolis-Medium',
    fontSize: SIZES.body2,
    lineHeight: 22,
  },
  tab: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.tab,
    lineHeight: 18,
  },
  subhead: {
    fontFamily: 'Metropolis-Medium',
    fontSize: SIZES.subhead,
    lineHeight: 19,
  },
  caption: {
    fontFamily: 'Metropolis-Medium',
    fontSize: SIZES.caption,
    lineHeight: 12,
  },
  button: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: SIZES.button,
    lineHeight: 22,
  },
};

export const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...COLORS,
    background: COLORS.white,
    card: COLORS.gray[99],
    text: COLORS.gray[45],
    border: COLORS.transparent,
    notification: COLORS.secondary,
  },
};
