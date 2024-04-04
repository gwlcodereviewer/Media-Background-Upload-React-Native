import styled from 'styled-components/native';
import {FontFamily, rpx} from '../../styles/utils';
import {colors} from '../../styles';
/**
 * Name: Wrapper
 * Desc: The Wrapper container
 */
export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
/**
 * Name: ScrollViewContainer
 * Desc: The scroll view container
 */
export const ScrollViewContainer = styled.ScrollView.attrs({
  contentContainerStyle: {flexGrow: 1},
})`
  flex: 1;
`;
/**
 * Name: HeaderView
 * Desc: The view for header
 */
export const HeaderView = styled.View`
  margin-vertical: ${rpx(50)}px;
`;
/**
 * Name: ButtonWrapper
 * Desc: The view for button
 */
export const ButtonWrapper = styled.View`
  margin-vertical: ${rpx(10)}px;
  border-radius: ${rpx(10)}px;
`;
/**
 * Name: RegistrationView
 * Desc: The view for registration
 */
export const RegistrationView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${rpx(5)}px;
`;

/**
 * Name: RegistrationLink
 * Desc: The touchable view for registration link
 */
export const RegistrationLink = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  margin-vertical: ${rpx(5)}px;
`;
/**
 * Name: ForgotPassLink
 * Desc: The touchable view for forgot password
 */
export const ForgotPassLink = styled.TouchableOpacity`
  align-self: flex-end;
  flex-direction: row;
  margin-vertical: ${rpx(5)}px;
`;

/**
 * Name: ForgotPassView
 * Desc: The view for forgot password
 */
export const ForgotPassView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${rpx(5)}px;
  margin-bottom: ${rpx(10)}px;
`;

/**
 * Name: GrayText
 * Desc: The gray text
 */
export const GrayText = styled.Text`
  color: ${colors.black};
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Regular};
`;

/**
 * Name: ClickText
 * Desc: The clickable text
 */
export const ClickText = styled.Text`
  color: ${colors.secondaryTextColor};
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Medium};
`;
/**
 * Name: LinkContainer
 * Desc: The touchable view for link
 */
export const LinkContainer = styled.TouchableOpacity``;

/**
 * Name: LinkView
 * Desc: The view for links
 */
export const LinkView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: ${rpx(20)}px;
`;

/**
 * Name: PolicyText
 * Desc: The policy text
 */
export const PolicyText = styled.Text`
  color: ${colors.secondaryTextColor};
  text-decoration: underline;
  padding-right: ${rpx(10)}px;
`;

/**
 * Name: TermsText
 * Desc: The terms text
 */
export const TermsText = styled.Text`
  color: ${colors.secondaryTextColor};
  text-decoration: underline;
  padding-left: ${rpx(10)}px;
`;

/**
 * Name: VersionText
 * Desc: The text for version
 */
export const VersionText = styled.Text`
  font-size: ${rpx(14)}px;
  line-height: ${rpx(22)}px;
  color: ${colors.labelColor};
`;

/**
 * Name: VersionView
 * Desc: The version view.
 */
export const VersionView = styled.View`
  align-items: center;
`;
/**
/**
 * Name: LoginYourAccountText
 * Desc: The text for login account label
 */
export const LoginYourAccountText = styled.Text`
  font-size: ${rpx(24)}px;
  line-height: ${rpx(32)}px;
  color: ${colors.black};
  font-family: ${FontFamily.Bold};
  margin-top: 50%;
  margin-bottom: ${rpx(20)}px;
`;
/**
 * Name: RewardPointsText
 * Desc: The text for reward points label
 */
export const RewardPointsText = styled.Text`
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  color: ${colors.secondaryColor};
  font-family: ${FontFamily.Regular};
  margin-bottom: ${rpx(30)}px;
  margin-top: ${rpx(16)}px;
`;
/**
 * Name: LogoImage
 * Desc: The logo image
 */
export const LogoImage = styled.Image``;
/**
 * Name: ForgotPasswordText
 * Desc: forgot password  text
 */
export const ForgotPasswordText = styled.Text`
  color: ${colors.secondaryTextColor};
  font-family: ${FontFamily.Medium};
  font-size: ${rpx(14)}px;
  line-height: ${rpx(20)}px;
`;

/**
 * Name: ChangeLanguageText
 * Desc: change language text
 */
export const ChangeLanguageText = styled.Text`
  color: ${colors.secondaryTextColor};
  font-size: ${rpx(14)}px;
  line-height: ${rpx(20)}px;
  font-family: ${FontFamily.Medium};
`;
/**
 * Name: ChangeLanguageContainer
 * Desc: change language container
 */
export const ChangeLanguageContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: ${rpx(22)}px;
  left: 0;
  right: 0;
`;
/**
 * Name: GrayText
 * Desc: The gray text
 */
export const LightGrayText = styled.Text`
  color: ${colors.lightGrayColor};
  font-size: ${rpx(14)}px;
  line-height: ${rpx(20)}px;
  font-family: ${FontFamily.Medium};
  padding-left: ${rpx(5)}px;
`;
/**
 * Name: LanguageImage
 * Desc: The language image
 */
export const LanguageImage = styled.Image`
  margin-right: ${rpx(10)}px;
`;
