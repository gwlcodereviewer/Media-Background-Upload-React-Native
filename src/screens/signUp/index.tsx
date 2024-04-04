/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { I18nManager, Text, TouchableHighlight } from "react-native";
import { AppStatusBar, InputBox, PrimaryButton } from "../../components/common";
import { Container, ScreenWrapper } from "../../styles/style";
import { INavigation } from "../../types";
import {
  AlreadyAccountText,
  ButtonWrapper,
  ClickText,
  CreateAccountText,
  FloatingLabelInputWrapper,
  InputContainer,
  RegistrationLink,
  RegistrationView,
  ScrollViewContainer,
} from "./styled";
import { strings } from "../../localization";
import { ALIGNMENT, ASYNC_CONST } from "../../constants/utils";
import {
  TOAST_MESSAGE_TYPE,
  getStorageItem,
  isValidEmail,
  showToastMessage,
} from "../../utils";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { NAV_HOME, NAV_LOGIN } from "../../navigation/constants";
import { localStrings } from "../../constants/localStrings";
import {
  ARABIC_LOCALE,
  DEFAULT_LOCALE,
} from "../../localization/utils/constants";
import Header from "../../components/header";
import FloatingLabelInput from "../../components/common/floatingLabelInput";
import { RightIconImage } from "./styled";
import pngImages from "../../assets/images/pngImages";
import Tooltip from "react-native-walkthrough-tooltip";
import { colors } from "../../styles";
import { InfoCrossImage } from "../../localization/languagePopup/styled";

interface Props {
  navigation?: INavigation;
}

/**
 * desc: Login screen UI
 * @param props
 */
const SignUp: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const {
    passwordString,
    firstNameString,
    lastNameString,
    mobileNumberString,
    usernameVString,
    emailAddressString,
    confirmPasswordString,
  } = strings;
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [mobileNumberError, setMobileNumberError] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [emailAddressError, setEmailAddressError] = useState<string>("");
  const [encryptPassword, setEncryptPassword] = useState<boolean>(true);
  const [encryptCPassword, setEncryptCPassword] = useState<boolean>(true);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  /**
   * Name: API call
   * Desc: Login Mutation call
   */
  const [
    loginUser,
    {
      isLoading: isGeneralLoading,
      isError: isGeneralError,
      isSuccess: generalSuccess,
      data: generalData,
    },
  ] = useLoginUserMutation();

  /**
   * Name: useEffect
   * Desc: to get language locale
   */
  useEffect(() => {
    getStorageItem(ASYNC_CONST.LANGUAGE_KEY).then((languageData) => {
      let locale = DEFAULT_LOCALE;
      if (languageData) {
        locale = JSON.parse(languageData);
      }
      setLanguage(locale);
      I18nManager.forceRTL(locale === ARABIC_LOCALE);
    });
  }, []);

  /**
   * Name: useEffect
   * Desc: to handle login api response
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
    const isValidFields = validateField(true);
    if (!isValidFields) {
      return false;
    }

    // define type for req_param
    const requestData = {
      email: "testuser@yopmail.com",
      password: "Galaxy@123",
    };
    loginUser(requestData);
  };

  /**
   * Name: validateField
   * Desc: Function to validate input fields
   * @param {any} allField - To validate all fields, It could be true and false
   * @param {string} field - Individual field name to validate
   * @returns check validation on form
   */
  const validateField = (allField = false, field?: string) => {
    let invalidFields = 0;
    if (field === localStrings.firstNameField || allField) {
      if (firstName === "") {
        setFirstNameError(strings.enterFirstName);
        invalidFields++;
      } else {
        setFirstNameError("");
      }
    }
    if (field === localStrings.lastNameField || allField) {
      if (lastName === "") {
        setLastNameError(strings.enterLastName);
        invalidFields++;
      } else {
        setLastNameError("");
      }
    }

    if (field === localStrings.mobileNumberField || allField) {
      if (mobileNumber === "") {
        setMobileNumberError(strings.enterMobileNumber);
        invalidFields++;
      } else {
        setMobileNumberError("");
      }
    }
    if (field === localStrings.emailAddressField || allField) {
      if (emailAddress === "") {
        setEmailAddressError(strings.pleaseEnterEmail);
        invalidFields++;
      } else if (emailAddress !== "" && !isValidEmail(emailAddress)) {
        setEmailAddressError(strings.enterValidEmail);
        invalidFields++;
      } else {
        setEmailAddressError("");
      }
    }
    if (field === localStrings.userNameField || allField) {
      if (username === "") {
        setUsernameError(strings.pleaseEnterUsername);
        invalidFields++;
      } else {
        setUsernameError("");
      }
    }
    if (field === localStrings.password || allField) {
      if (password === "") {
        setPasswordError(strings.pleaseEnterPassword);
        invalidFields++;
      } else {
        setPasswordError("");
      }
    }
    if (field === localStrings.cPasswordField || allField) {
      if (confirmPassword === "") {
        setConfirmPasswordError(strings.enterConformPassword);
        invalidFields++;
      } else if (confirmPassword !== password) {
        setConfirmPasswordError(strings.passwordDoesNotMatch);
        invalidFields++;
      } else {
        setConfirmPasswordError("");
      }
    }
    return invalidFields === 0;
  };

  return (
    <ScreenWrapper>
      <AppStatusBar />
      <Header
        title={strings.signUp}
        onPressLeft={() => {
          navigation?.goBack();
        }}
      />
      <ScrollViewContainer bounces={false}>
        <Container>
          <CreateAccountText>{strings.createAccount}</CreateAccountText>
          <InputContainer>
            <FloatingLabelInputWrapper marginRight={5}>
              <FloatingLabelInput
                enableFocus={firstName !== ""}
                onChangeText={(text: string) => setFirstName(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.firstNameField)
                }
                inputValue={firstName}
                errorText={firstNameError}
                maxLength={64}
                label={firstNameString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper marginLeft={5}>
              <FloatingLabelInput
                enableFocus={lastName !== ""}
                onChangeText={(text: string) => setLastName(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.lastNameField)
                }
                inputValue={lastName}
                errorText={lastNameError}
                maxLength={64}
                label={lastNameString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper>
              <FloatingLabelInput
                enableFocus={mobileNumber !== ""}
                onChangeText={(text: string) => setMobileNumber(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.mobileNumberField)
                }
                inputValue={mobileNumber}
                errorText={mobileNumberError}
                maxLength={64}
                label={mobileNumberString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper>
              <FloatingLabelInput
                enableFocus={emailAddress !== ""}
                onChangeText={(text: string) => setEmailAddress(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.emailAddressField)
                }
                inputValue={emailAddress}
                errorText={emailAddressError}
                maxLength={64}
                label={emailAddressString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper>
              <FloatingLabelInput
                enableFocus={username !== ""}
                onChangeText={(text: string) => setUsername(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.userNameField)
                }
                inputValue={username}
                errorText={usernameError}
                maxLength={64}
                label={usernameVString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper>
              <FloatingLabelInput
                enableFocus={password !== ""}
                onChangeText={(text: string) => setPassword(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.password)
                }
                inputValue={password}
                errorText={passwordError}
                maxLength={64}
                label={passwordString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
                encrypt={encryptPassword}
                onPressRightIcon={() => setEncryptPassword(!encryptPassword)}
                isShowOpenEye={true}
              />
            </FloatingLabelInputWrapper>
            <FloatingLabelInputWrapper>
              <FloatingLabelInput
                enableFocus={confirmPassword !== ""}
                onChangeText={(text: string) => setConfirmPassword(text)}
                onBlurHandler={() =>
                  validateField(false, localStrings.cPasswordField)
                }
                inputValue={confirmPassword}
                errorText={confirmPasswordError}
                maxLength={64}
                label={confirmPasswordString}
                autoCapitalize="none"
                textAlign={
                  language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
                }
                encrypt={encryptCPassword}
                onPressRightIcon={() => setEncryptCPassword(!encryptCPassword)}
                isShowOpenEye={true}
              />
            </FloatingLabelInputWrapper>
          </InputContainer>
          <ButtonWrapper>
            <PrimaryButton
              title={strings.signUp}
              onPress={() => onSubmit()}
              showLoader={isGeneralLoading}
            />
          </ButtonWrapper>
          <RegistrationView>
            <RegistrationLink
              onPress={() => {
                navigation?.navigate(NAV_LOGIN);
              }}
            >
              <AlreadyAccountText>
                {strings.alreadyHaveAnAccount}
              </AlreadyAccountText>
              <ClickText>{strings.login}</ClickText>
            </RegistrationLink>
          </RegistrationView>
        </Container>
      </ScrollViewContainer>
    </ScreenWrapper>
  );
};

export default SignUp;
