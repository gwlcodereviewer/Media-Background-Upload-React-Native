/**
 * Name: API_END_POINTS
 * Desc: The API end points
 */
export const API_END_POINTS = {
  login: '/api/login',
  verifyMobile: '/api/verifyMobile',
  createSubscription: '/api/create-subscription',
  updateSubscription: '/api/update-android-in-app-subscription',
  subscriptionListing: '/api/subscription-plan-list',
  mediaList: '/api/get-all-media',
  addNewMedia: '/api/v3/add-new-media',
  loadMoreMedia: '/api/load-more-media'
};

/**
 * Name: HEADER_KEYS
 * Desc: The headers key params.
 */
export const HEADER_KEYS = {
  Authorization: 'Authorization',
  ContentType: 'Content-Type',
  ApplicationJson: 'application/json',
  Bearer: 'Bearer',
  Accept: 'Accept',
};

/**
 * Name: REDUCER_PATHS
 * Desc: The reducer paths.
 */
export const REDUCER_PATHS = {
  AuthApi: 'authApi',
  subscriptionApi: 'subscriptionApi',
  MediaListAPI: 'mediaListApi',
  awsApi: 'awsApi',
};
/**
 * Name: STATUS_CODES
 * Desc: The api status codes
 */
export const STATUS_CODES = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unAuthorized: 401,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
};