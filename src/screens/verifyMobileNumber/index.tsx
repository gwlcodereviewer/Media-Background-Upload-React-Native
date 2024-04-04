import React, { useEffect, useState } from "react";
import { AppStatusBar, PrimaryButton } from "../../components/common";
import { Container, ScreenWrapper } from "../../styles/style";
import { INavigation } from "../../types";
import {
  AlreadyAccountText,
  BottomViewContainer,
  ButtonWrapper,
  ClickText,
  CreateAccountText,
  ErrorText,
  GrayText,
  MainContainer,
  MobileText,
  RegistrationLink,
  RegistrationView,
  TopContainer,
} from "./styled";
import { strings } from "../../localization";
import { TOAST_MESSAGE_TYPE, showToastMessage } from "../../utils";
import { useVerifyMobileMutation } from "../../redux/api/authApi";
import { NAV_HOME } from "../../navigation/constants";
import Header from "../../components/header";
import { colors } from "../../styles";
import OTPTextView from "react-native-otp-textinput";
import styles from "../../styles/styleSheet";
import { SimpleView } from "../../components/common/floatingLabelInput/styled";

interface Props {
  navigation?: INavigation;
  route?: INavigation;
}

/**
 * desc: VerifyMobileNumber screen UI
 * @param props
 */
const VerifyMobileNumber: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const { mobileNo } = props?.route?.params;
  const [errorText, setErrorText] = useState<string>("");
  const [otpValue, setOtp] = useState<string>("");

  /**
   * Name: validateField
   * Desc: Function to validate input fields
   * @returns check validation on form
   */
  const validateField = (otpValue: string) => {
    let invalidFields = 0;
    if (otpValue.length === 6) {
      setErrorText(strings.enterOtp);
    }
    return invalidFields === 0;
  };

  /**
   * Name: API call
   * Desc: verifyMobile Mutation call
   */
  const [
    verifyMobile,
    {
      isLoading: isGeneralLoading,
      isError: isGeneralError,
      isSuccess: generalSuccess,
      data: generalData,
    },
  ] = useVerifyMobileMutation();

  /**
   * Name: useEffect
   * Desc: to handle verifyMobile api response
   */
  useEffect(() => {
    if (generalSuccess && generalData?.status) {
      navigation?.replace(NAV_HOME);
    } else {
      if (generalData?.message) {
        showToastMessage(
          strings.appName,
          generalData?.message,
          TOAST_MESSAGE_TYPE.error
        );
        navigation?.replace(NAV_HOME);
      }
    }
    if (isGeneralError) {
      showToastMessage(
        strings.appName,
        strings.pleaseCheckInternetSettings,
        TOAST_MESSAGE_TYPE.error
      );
    }
  }, [isGeneralLoading]);
  /**
   * Name: onSubmit
   * Desc: to submit login api request and validate form
   */
  const onSubmit = () => {
    // define type for req_param
    const requestData = {
      mobileNo: mobileNo,
      otp: otpValue,
    };
    verifyMobile(requestData);
  };
  /**
   * Name: onSubmit
   * Desc: to submit login api request and validate form
   */
  const onResend = () => {
    // define type for req_param
    const requestData = {
      mobileNo: mobileNo,
      otp: otpValue,
    };
    verifyMobile(requestData);
  };
  /**
   * Name: ErrorView
   * show error message
   * @returns
   */
  const ErrorView = () => (
    <SimpleView>
      {errorText !== "" && <ErrorText>{errorText}</ErrorText>}
    </SimpleView>
  );

  return (
    <ScreenWrapper>
      <AppStatusBar />
      <Header
        title={strings.signUp}
        onPressLeft={() => {
          navigation?.goBack();
        }}
      />
      <Container>
        <MainContainer>
          <TopContainer>
            <CreateAccountText>{strings.verifyMobileNumber}</CreateAccountText>
            <GrayText>{strings.enterOtp}</GrayText>
            <MobileText>
              ({mobileNo}). <ClickText>{strings.changeNumber}</ClickText>
            </MobileText>
            <OTPTextView
              handleTextChange={(text) => {
                setOtp(text);
                validateField(text);
              }}
              containerStyle={styles.textInputContainer}
              textInputStyle={styles.roundedTextInput}
              inputCount={6}
              inputCellLength={1}
              keyboardType="numeric"
              tintColor={colors.whiteGrayColor}
              offTintColor={colors.whiteGrayColor}
            />
            <ErrorView />
          </TopContainer>
          <BottomViewContainer>
            <RegistrationView>
              <RegistrationLink onPress={() => {onResend()}}>
                <AlreadyAccountText>
                  {strings.didNotReceiveOtp}
                </AlreadyAccountText>
                <ClickText>{strings.resendOtp}</ClickText>
              </RegistrationLink>
            </RegistrationView>
            <ButtonWrapper>
              <PrimaryButton
                title={strings.verify}
                onPress={() => onSubmit()}
                isDisable={otpValue.length !== 6}
                showLoader={isGeneralLoading}
              />
            </ButtonWrapper>
          </BottomViewContainer>
        </MainContainer>
      </Container>
    </ScreenWrapper>
  );
};

export default VerifyMobileNumber;
