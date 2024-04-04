import LocalizedStrings from 'react-native-localization';
import {initializeRTL} from 'react-native-easy-localization-and-rtl';

import {LANG_EN_US} from './locales/en';
import {LANG_AR} from './locales/ar';

export const strings = new LocalizedStrings({
  en: LANG_EN_US,
  ar: LANG_AR,
});
initializeRTL(strings);
