import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {
  ErrorText,
  InputContainer,
  InputHeader,
  InputWrapper,
  Required,
  SimpleLabel,
  SimpleView,
} from './styled';
import InputBox from '../inputBox';
import {rh, rpx, rw} from '../../../styles/utils';
import {RowView} from '../../../styles/style';
import colors from '../../../styles/colors';
import styles from '../../../styles/styleSheet';

interface Props {
  testID?: string;
  label?: string;
  placeHolderText?: string;
  inputValue: any;
  floatingLabel?: boolean;
  encrypt?: boolean;
  errorText?: string;
  onChangeText?: (text: string) => void;
  onBlurHandler?: () => void;
  onPressIn?: () => void;
  onFocusHandler?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  isShowRightIcon?: boolean;
  rightIcon?: JSX.Element;
  onPressRightIcon?: () => void;
  editable?: boolean;
  isShowLeftIcon?: boolean;
  leftIcon?: JSX.Element;
  onPressLeftIcon?: () => void;
  onSubmitEditing?: () => void;
  width?: any;
  height?: any;
  borderColor?: string;
  showRightButton?: boolean;
  rightButtonText?: string;
  onPressRightButton?: () => void;
  keyboardType?: any;
  headerText?: string;
  isRequired?: boolean;
  maxLength?: number;
  isBottomBorderOnly?: boolean;
  isShowOpenEye?: boolean;
  textContentType?: any;
  enableFocus?: boolean;
  contextMenuHidden?: boolean;
  caretHidden?: boolean;
  onKeyPress?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  isFocus?: boolean;
  textAlign?: string;
}

const FloatingLabelInput = (props: Props) => {
  const {
    label,
    inputValue,
    floatingLabel = true,
    encrypt,
    errorText = '',
    onBlurHandler,
    onPressIn,
    onFocusHandler,
    multiline,
    numberOfLines,
    isShowOpenEye,
    rightIcon,
    onPressRightIcon,
    editable = true,
    isShowLeftIcon,
    leftIcon,
    onPressLeftIcon,
    width,
    height,
    borderColor = colors.inputBorderColor,
    showRightButton,
    rightButtonText = '',
    onPressRightButton,
    keyboardType = 'default',
    headerText,
    isRequired = false,
    maxLength,
    placeHolderText,
    onChangeText,
    enableFocus,
    isBottomBorderOnly,
    textContentType,
    contextMenuHidden = false,
    textAlign,
    autoCapitalize = 'sentences',
    caretHidden = false,
    onKeyPress,
    isFocus = false,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(isFocus);
  const [animatedIsFocused] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedIsFocused, isFocused]);
  useEffect(() => {
    if (enableFocus !== undefined && enableFocus !== isFocused)
      setIsFocused(enableFocus);
  }, [enableFocus]);
  const handleFocus = () => {
    setIsFocused(true);
    if (onFocusHandler) {
      onFocusHandler();
    }
  };

  const handleBlur = () => {
    if (floatingLabel) {
      if (inputValue !== '') {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    }
    if (onBlurHandler) {
      onBlurHandler();
    }
  };
  const onPress = () => {
    if (onPressIn) onPressIn();
  };
  const labelStyle = {
    position: 'absolute' as const,
    paddingHorizontal: isBottomBorderOnly ? rw(5) : rw(15),
    marginTop: isBottomBorderOnly ? 0 : rh(5),
    backgroundColor: colors.white,
    marginLeft: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 5],
    }),
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [rh(10), -rh(15)],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [rpx(14), rpx(14)],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.placeholderTextColor, colors.placeholderTextColor],
    }),
  };

  const FloatingLabel = () => (
    <SimpleView>
      {floatingLabel ? (
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
      ) : (
        <SimpleLabel>{label}</SimpleLabel>
      )}
    </SimpleView>
  );
  const ErrorView = () => (
    <SimpleView>
      {errorText !== '' && <ErrorText>{errorText}</ErrorText>}
    </SimpleView>
  );

  const Header = () => (
    <SimpleView>
      {headerText && (
        <RowView>
          <InputHeader>{headerText}</InputHeader>
          {isRequired && <Required>{'*'}</Required>}
        </RowView>
      )}
    </SimpleView>
  );
  return (
    <InputContainer>
      <Header />
      <InputWrapper
        multiline={multiline === undefined ? false : multiline === true}
        height={height}
        width={width}
        borderColor={errorText !== '' ? colors.red : colors.inputBorderColor}
        backgroundColor={colors.white}
        isBottomBorderOnly={isBottomBorderOnly}
        style={styles.whiteButtonShadow}>
        <FloatingLabel />
        <InputBox
          placeHolderText={placeHolderText}
          encrypt={encrypt}
          onChangeText={onChangeText}
          inputValue={inputValue}
          onFocusHandler={handleFocus}
          onBlurHandler={handleBlur}
          numberOfLines={numberOfLines}
          multiline={multiline === undefined ? false : multiline === true}
          editable={editable}
          isShowLeftIcon={isShowLeftIcon}
          isShowRightIcon={isShowOpenEye}
          keyboardType={keyboardType}
          height={height}
          isBottomBorderOnly={isBottomBorderOnly}
          showRightButton={showRightButton}
          rightButtonText={rightButtonText}
          onPressRightIcon={onPressRightIcon}
          maxLength={maxLength}
          contextMenuHidden={contextMenuHidden}
          autoCapitalize={autoCapitalize}
          textContentType={textContentType}
          rightIcon={rightIcon || undefined}
          leftIcon={leftIcon}
          onPressIn={onPress}
          caretHidden={caretHidden}
          onKeyPress={onKeyPress}
          {...rest}
        />
      </InputWrapper>
      <ErrorView />
    </InputContainer>
  );
};

export default FloatingLabelInput;
