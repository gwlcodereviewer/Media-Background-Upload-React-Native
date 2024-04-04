  
  /**
   * Name: PLAN_STATUS
   * Desc: The subscription plan status
   */
  export const PLAN_STATUS = {
    notPurchased: 'NotPurchased',
    active: 'Active',
    expired: 'Expired',
    cancelled: 'Canceled',
  };
  
  /**
   * Name: subscriptionSKU
   * Desc: Subscription SKU ids
   */
  export const subscriptionSKU = {
    android: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
    ],
    ios: ['P01', 'P02', 'P03', 'P04', 'P05', 'P06'],
  };
  
  /**
   * Name: APPLE_IN_APP_SUBSCRIPTION_URL
   * Desc: Apple in app subscription url
   */
  export const APPLE_IN_APP_SUBSCRIPTION_URL =
    'https://apps.apple.com/account/subscriptions';
  
  /**
   * Name: ANDROID_IN_APP_SUBSCRIPTION_URL
   * Desc: Play store in app subscription url
   */
  export const ANDROID_IN_APP_SUBSCRIPTION_URL =
    'https://play.google.com/store/account/subscriptions?package=com.baseproject&sku=';
  
  /**
   * Name: SUBSCRIBED_FROM
   * Desc: Subscription from which platform
   */
  export const SUBSCRIBED_FROM = {
    appStore: 'ios',
    playStore: 'android',
    web: 'web',
  };