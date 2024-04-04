export const isProduction = false;

export const stgPath = 'https://staging.lyfeplum.com';
export const prodPath = 'https://app.lyfeplum.com';

const baseUrl = isProduction ? prodPath : stgPath;
const appVersion = isProduction ? '1.7' : '1.7';

export default {
  baseUrl,
  isProduction,
  appVersion,
};
