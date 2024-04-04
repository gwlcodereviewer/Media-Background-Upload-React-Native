import React from 'react';
import {ActivityIndicator, StyleProp, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../styles/colors';
import {defaultTheme} from '../../../styles/theme';
import {styleUtils} from '../../../styles';
import {ButtonLayout, ButtonText} from './styled';

/**
 * Props type declaration
 */
interface ButtonProps {
  title: string;
  onPress: () => void;
  showLoader?: boolean;
  isDisable?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  key?: string;
  spinnerColor?: string;
}

/**
 * Desc: Button UI
 * @param props
 * backgroundColor and color property will work in btnStyle props
 * @returns React component
 */
const PrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {rpx, rw} = styleUtils;
  const {white, black, stormGreyRgba, primaryButtonColor} = colors;
  const {
    title,
    isDisable,
    showLoader = false,
    buttonStyle,
    textStyle,
    spinnerColor,
    ...rest
  } = props;

  /**
   * default/enable button style
   */
  const defaultStyle = {
    height: rpx(56),
    borderWidth: rpx(1),
    paddingHorizontal: rw(13),
    borderColor: primaryButtonColor,
    backgroundColor: primaryButtonColor,
  };

  /**
   * disable button style
   */
  const disableButtonStyle = {
    borderColor: stormGreyRgba,
    backgroundColor: stormGreyRgba,
  };

  /**
   * button text style
   */
  const defaultTextStyle = {color: white};

  /**
   * desc: method to get text style
   * @returns
   */
  const getTextStyle = () => {
    if (isDisable) {
      return defaultTextStyle;
    }
    return Object.assign(defaultTextStyle, textStyle);
  };

  /**
   * desc: method to get button style
   * @returns
   */
  const getButtonStyle = () => {
    if (isDisable) {
      return Object.assign(defaultStyle, disableButtonStyle);
    }
    return Object.assign(defaultStyle, buttonStyle);
  };

  /**
   * desc: method to get button content/text
   * @returns
   */
  const renderBtnContent = () => {
    if (showLoader) {
      return <ActivityIndicator color={spinnerColor || colors.white} />;
    }
    return <ButtonText style={getTextStyle()}>{title}</ButtonText>;
  };

  return (
    <ButtonLayout
      style={getButtonStyle()}
      disabled={isDisable || showLoader}
      {...rest}>
      {renderBtnContent()}
    </ButtonLayout>
  );
};

export default PrimaryButton;
