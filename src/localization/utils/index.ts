import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {ASYNC_CONST} from '../../constants/utils';
import {getStorageItem, setStorageItem} from '../../utils';
import {ARABIC_LOCALE, DEFAULT_LOCALE, URDU_LOCALE} from './constants';

/**
 * desc: Method to change language
 * @param language locale like ar or en
 * @returns
 */
export const changeLanguage = (value: any, isReload: boolean) => {
  setStorageItem(ASYNC_CONST.LANGUAGE_KEY, value);
  I18nManager.forceRTL(value === ARABIC_LOCALE || value === URDU_LOCALE);
  if (isReload) {
    RNRestart.Restart();
  }
};
// desc: set font weight bold
export const FontsWeight = {
  BOLD: 'bold',
  REGULAR: '300',
};
import {Dimensions, PixelRatio} from 'react-native';
import {strings} from '..';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// default reference dimensions (iPad)
export const iPadRefDimensions = {
  width: 1280,
  height: screenHeight <= 554 ? 750 : 850,
};

// default dimensions (iPhone X)
// all calculations are done based on the initial design dimensions
// which is based on iPhone X
export const defaultDimensions = {
  width: 375,
  height: 812,
};

const widthRatio = screenWidth / iPadRefDimensions.width;
const heightRatio = screenHeight / iPadRefDimensions.height;
const meanRatio = (widthRatio + heightRatio) / 2;

// This is used to make the scale factor smaller (avoid having very big text on
// tablets and very small text on smaller phones)
const scaleDiff = 0.3;

// ResponsiveWidth: this can be used for properties like:
// width, padding-left, padding-right, padding-horizontal, margin-left, etc.
export const rw = (pixels: number) =>
  PixelRatio.roundToNearestPixel(pixels * widthRatio);

// ResponsiveHeight: this can be used for properties like:
// height, padding-top, padding-bottom, padding-vertical, margin-top, etc.
export const rh = (pixels: number) =>
  PixelRatio.roundToNearestPixel(pixels * heightRatio);

// ResponsivePX: This is used when we need constrains on both width and height.
// It can be used for properties like:
// font-size, border-radius
export const rpx = (pixels: number) => {
  const scale = (meanRatio - 1) * scaleDiff + 1;
  return PixelRatio.roundToNearestPixel(pixels * scale);
};

export const initLanguage = (loaded: any) => {
  getStorageItem(ASYNC_CONST.LANGUAGE_KEY).then(languageData => {
    let locale = DEFAULT_LOCALE;
    if (languageData) {
      locale = JSON.parse(languageData);
    }
    I18nManager.allowRTL(locale === ARABIC_LOCALE);
    I18nManager.forceRTL(locale === ARABIC_LOCALE);
    strings.setLanguage(locale);
    loaded();
  });
};
