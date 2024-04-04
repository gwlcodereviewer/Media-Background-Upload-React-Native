/**
 * Name: IRules
 * Desc: The interface type for rules
 */
export interface IRules {
  email?: boolean;
  password?: boolean;
  required?: boolean;
  title: string;
  confirmPwd?: boolean;
}

/**
 * Name: IValidationRules
 * Desc: The interface type for validation rules
 */
export interface IValidationRules {
  email: IRules;
  password?: IRules;
  npassword?: IRules;
  cpassword?: IRules;
  regEmail?: IRules;
  regPwd?: IRules;
  regConfirmPwd?: IRules;
  name?: IRules;
}

/**
 * Name: IInputState
 * Desc: The interface type for input state
 */
export interface IInputState {
  npassword?: string;
  npasswordError?: string;
  cpassword?: string;
  cpasswordError?: string;
  password?: string;
  passwordError?: string;
  email?: string;
  emailError?: string;
  regEmail?: string;
  regPwd?: string;
  regConfirmPwd?: string;
  regEmailError?: string;
  regPwdError?: string;
  regConfirmPwdError?: string;
  name?: string;
}

/**
 * Name: IFbUserDataType
 * Desc: The interface type for fb data
 */
export interface IFbUserDataType {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  name: string;
  picture: IPicture;
}

/**
 * Name: IPicture
 * Desc: The interface type for picture
 */
export interface IPicture {
  data: IData;
}

/**
 * Name: IData
 * Desc: The interface type for data
 */
export interface IData {
  height: number;
  is_silhouette: boolean;
  url: string;
  width: number;
}

/**
 * Name: INavigation
 * Desc: The interface type for navigation
 */
export interface INavigation {
  /**
   * TODO: In this interface we are using  'any' because  of not know the types of filed.
   */
  reset: (arg0: {
    index: number;
    routes: {name: string; params?: any}[];
  }) => void;
  getParam: (param1: any, param2: any) => any;
  goBack: () => void;
  dispatch: (param: any) => void;
  push: (param1: any, param2?: any) => void;
  addListener: (a: string, b: () => void) => any;
  navigate: (param1: string, param2?: any) => void;
  setOptions: (param: any) => void;
  route: (key: string, name: string, params: any) => void;
  state: any;
}
/**
 * Name: IFilterType
 * Desc: The interface type for filterText style
 */
export interface IFilterType {
  isSelected: boolean;
  title: string;
}

/**
 * Name: IApiResponse
 * Desc: The interface type for api response
 */
export interface IApiResponse {
  status: string;
  message: string;
}

/**
 * Name: IRegisterApiResponse
 * Desc: The interface type for social api response
 */
export interface IRegisterApiResponse {
  status: string;
  message: string;
  token: string;
  planStatus: string;
  subscription: ISubscriptionDetail;
  isFamilyPlanAdmin: boolean;
  familyPlanStatus: string;
}

/**
 * Name: IUserApiResponse
 * Desc: The interface type for user profile api response
 */
export interface IUserApiResponse {
  status: string;
  message: string;
  authenticated_user: IUserDetailResponse;
}

/**
 * Name: IUserDetailResponse
 * Desc: The interface type for user profile detail response
 */
export interface IUserDetailResponse {
  email: string;
  first_name: string;
  last_name: string;
  zip_code: string;
  date_of_birth: string;
  profile_photo_url: string;
  cover_image: string;
  social_type: string;
  final_wish_points: number;
  life_celebration_points: number;
}

 
/**
 * Name: ILoginApiResponse
 * Desc: The interface type for login api response
 */
export interface ILoginApiResponse {
  status: string;
  message: string;
  token: string;
  isUserVerified: boolean;
  planStatus: string;
  subscription: ISubscriptionDetail;
  isFamilyPlanAdmin: boolean;
  familyPlanStatus: string;
}

/**
 * Name: IPlanType
 * Desc: The interface type for plan type
 */
export interface IPlanType {
  monthly: IPlanDetail[];
  annually: IPlanDetail[];
}

/**
 * Name: IPlanDetail
 * Desc: The interface type for plan details
 */
export interface IPlanDetail {
  access: string;
  android_sku: string;
  billing_method: string;
  id: number;
  ios_sku: string;
  plan: string;
  price: string;
  price_label: string;
}

/**
 * Name: IUserInfoResponse
 * Desc: The interface type for user info
 */
export interface IUserInfoResponse {
  androidSku: string;
  id: string;
  iosSku: string;
  nextRenewalDate: string;
  planStatus: string;
  plan_name: string;
  max_user_allowed: number;
  plan: string;
  price: string;
  platform: string;
  isFamilyPlanAdmin: boolean;
  familyPlanStatus: string;
  familyOwnerName: string;
  invitationMessageStatus: number;
}

/**
 * Name: ISubscriptionDetail
 * Desc: The interface type for subscription detail
 */
export interface ISubscriptionDetail {
  ends_at: string;
  id: number;
  plan_name: string;
  plan_type: string;
}
/**
 * Name: IVerifyMobileApiResponse
 * Desc: The interface type for verify mobile api response
 */
export interface IVerifyMobileApiResponse {
  status: string;
  message: string;
}
/**
 * Name: IListingApiResponse
 * Desc: The interface type for listing api response
 */
export interface IListingApiResponse {
  status: string;
  message: string;
  plans: IPlanType;
  userInfo: IUserInfoResponse;
}
/**
 * Name: IUserData
 * Desc: The interface type for user data
 */
export interface IUserData {
  id: number;
  profile_photo_url: string;
  cover_image: string;
  social_type: string;
}
/**
 * Name: IMediaApiResponse
 * Desc: The interface type for media api response
 */
export interface IMediaApiResponse {
  status: string;
  message: string;
  show_btn: boolean;
  media: any;
}