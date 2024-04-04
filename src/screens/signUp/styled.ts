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
  align-items: center;
  justify-content: center;
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
  align-self: flex-start;
  flex-direction: row;
  margin-vertical: ${rpx(5)}px;
`;

/**
 * Name: ForgotPassView
 * Desc: The view for forgot password
 */
export const ForgotPassView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${rpx(5)}px;
  margin-bottom: ${rpx(10)}px;
`;

/**
 * Name: GrayText
 * Desc: The gray text
 */
export const GrayText = styled.Text`
  color: ${colors.black};
  font-size: ${rpx(14)}px;
  line-height: ${rpx(20)}px;
  font-family: ${FontFamily.Regular};
`;

/**
 * Name: ClickText
 * Desc: The clickable text
 */
export const ClickText = styled.Text`
  color: ${colors.secondaryTextColor};
  padding-left: ${rpx(5)}px;
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
 * Name: CreateAccountText
 * Desc: The text for create account label
 */
export const CreateAccountText = styled.Text`
  font-size: ${rpx(24)}px;
  line-height: ${rpx(32)}px;
  color: ${colors.black};
  font-family: ${FontFamily.Bold};
`;
interface TextProps {
  marginTop?: number;
}
/**
 * Name: RegularText
 * Desc: The regular text
 */
export const RegularText = styled.Text<TextProps>`
  color: ${colors.black};
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Regular};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
`;
/**
 * Name: InputContainer
 */
export const InputContainer = styled.View``;
/**
 * Name: InputRowContainer
 */
export const InputRowContainer = styled.View`
  flex-direction: row;
`;
interface IStyleProps {
  marginLeft?: number;
  marginRight?: number;
}
/**
 * Name: FloatingLabelInputWrapper
 * Desc: The view for input field
 */
export const FloatingLabelInputWrapper = styled.View<IStyleProps>`
  flex: 1;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${props => (props.marginRight ? props.marginRight : 0)}px;
  margin-vertical: ${rpx(5)}px;
`;
export const RightIconImage = styled.Image`
  width: ${rpx(20)}px;
  height: ${rpx(20)}px;
`;
/**
 * Name: AlreadyAccountText
 * Desc: text already have an account
 */
export const AlreadyAccountText = styled.Text`
  color: ${colors.black};
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Regular};
`;
/**
 * Name: InfoIconContainer
 * Desc: info icon container
 */
export const InfoIconContainer = styled.View`
  position: absolute;
  right: ${rpx(10)}px;
  top: ${rpx(27)}px;
`;
/**
 * Name: InfoText
 * Desc: The gray text
 */
export const InfoText = styled.Text`
  color: ${colors.white};
  font-size: ${rpx(14)}px;
  line-height: ${rpx(20)}px;
  font-family: ${FontFamily.Medium};
  width: 80%;
`;
/**
 * Name: InfoTextIconContainer
 * Desc: info icon and text container
 */
export const InfoTextIconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
