import React, { useEffect, useState } from "react";
import { I18nManager } from "react-native";
import { AppStatusBar, PrimaryButton } from "../../components/common";
import { Container, ScreenWrapper } from "../../styles/style";
import { INavigation } from "../../types";
import {
  ButtonWrapper,
  ClickText,
  ForgotPassLink,
  ForgotPassView,
  ForgotPasswordText,
  GrayText,
  LoginYourAccountText,
  RegistrationLink,
  RegistrationView,
  ScrollViewContainer,
} from "./styled";
import { strings } from "../../localization";
import { ALIGNMENT, ASYNC_CONST } from "../../constants/utils";
import {
  TOAST_MESSAGE_TYPE,
  getStorageItem,
  showToastMessage,
} from "../../utils";
import { useLoginUserMutation } from "../../redux/api/authApi";
import {
  NAV_HOME,
  NAV_SIGN_UP,
  NAV_VERIFY_MOBILE,
} from "../../navigation/constants";
import { localStrings } from "../../constants/localStrings";
import {
  ARABIC_LOCALE,
  DEFAULT_LOCALE,
} from "../../localization/utils/constants";
import FloatingLabelInput from "../../components/common/floatingLabelInput";
import { colors } from "../../styles";
import LanguageModal from "../../localization/languagePopup";

interface Props {
  navigation?: INavigation;
}

/**
 * desc: Login screen UI
 * @param props
 */
const Login: React.FC<Props> = (props: Props) => {
  const { navigation } = props;
  const { passwordString } = strings;
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [encryptPassword, setEncryptPassword] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
  }, [isGeneralLoading, isGeneralError, generalSuccess, isGeneralError]);
  /**
   * Name: onSubmit
   * Desc: to submit login api request and validate form
   */
  const onSubmit = () => {
    navigation?.replace(NAV_HOME);

    const isValidFields = validateField(true);
    if (!isValidFields) {
      return false;
    }

    // define type for req_param
    const requestData = {
      email: username,
      password: password,
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
    return invalidFields === 0;
  };

  return (
    <ScreenWrapper>
      <ScrollViewContainer bounces={false}>
        <Container>
          <AppStatusBar />
          <LoginYourAccountText>
            {strings.loginYourAccount}
          </LoginYourAccountText>
          <FloatingLabelInput
            testID={strings.userNameText}
            enableFocus={username !== ""}
            onChangeText={(text: string) => setUsername(text)}
            onBlurHandler={() =>
              validateField(false, localStrings.userNameField)
            }
            inputValue={username}
            errorText={usernameError}
            maxLength={64}
            label={strings.userNameText}
            autoCapitalize="none"
            textAlign={
              language === ARABIC_LOCALE ? ALIGNMENT.right : ALIGNMENT.left
            }
          />
          <FloatingLabelInput
            testID={strings.passwordString}
            enableFocus={password !== ""}
            onChangeText={(text: string) => setPassword(text)}
            onBlurHandler={() => validateField(false, localStrings.password)}
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
          <ForgotPassView>
            <ForgotPassLink
              onPress={() => {
                navigation?.navigate(NAV_VERIFY_MOBILE);
              }}
            >
              <ForgotPasswordText>{strings.forgotPassword}</ForgotPasswordText>
            </ForgotPassLink>
          </ForgotPassView>
          <ButtonWrapper>
            <PrimaryButton
              title={strings.login}
              onPress={() => onSubmit()}
              showLoader={isGeneralLoading}
              spinnerColor={colors.white}
            />
          </ButtonWrapper>
          <RegistrationView>
            <RegistrationLink
              onPress={() => {
                navigation?.navigate(NAV_SIGN_UP);
              }}
            >
              <GrayText>{strings.noAccount}</GrayText>
              <ClickText>{strings.signUp}</ClickText>
            </RegistrationLink>
          </RegistrationView>
        </Container>
      </ScrollViewContainer>
      <LanguageModal
        selectedLanguageCode={language}
        onChange={() => {
          setModalVisible(false);
        }}
        modalVisible={modalVisible}
        onLanguageChange={() => {
          setModalVisible(false);
        }}
      />
    </ScreenWrapper>
  );
};

export default Login;
