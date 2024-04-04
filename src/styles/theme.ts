import colors from './colors';

export const darkTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#353c51',
  PRIMARY_TEXT_COLOR: '#767d92',
  SECONDARY_TEXT_COLOR: colors.white,
  PRIMARY_BUTTON_COLOR: '#152642',
  SECONDARY_BUTTON_COLOR: '#506680',
  PRIMARY_DARK: '#12193D',
  PRIMARY_GREY: '#F8F8F9'
};

export const lightTheme = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: colors.white,
  PRIMARY_TEXT_COLOR: '#DB7093',
  SECONDARY_TEXT_COLOR: '#333333',
  PRIMARY_BUTTON_COLOR: '#b9d6f3',
  SECONDARY_BUTTON_COLOR: '#a1c9f1',
  PRIMARY_BORDER_COLOR: '#DADCE5'
};

export const defaultTheme = {
  primaryButtonColor: colors.dodgerBlue,
  primaryBackgroundColor: colors.white,
  primaryTextColor: colors.midnightExpress,
  primaryBorderColor: colors.dodgerBlue,
  secondaryTextColor: colors.stormGrey,
  secondaryButtonColor: colors.stormGrey,
  secondaryBorderColor: colors.hawkesBlue,
  secondaryBackgroundColor: colors.ghostWhite,
  defaultTextColor: colors.white
};
