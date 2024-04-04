import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TabStackNavigator from './tabStackNavigator';
import {ScreenLoader} from '../components/common';
import {HEADER_TITLE_CENTER} from '../constants/utils';
import Login from '../screens/login';
import Profile from '../screens/profile';
import colors from '../styles/colors';
import {checkLogin} from '../utils';
import {
  NAV_HOME,
  NAV_HOME_SESSION,
  NAV_LOGIN,
  NAV_PROFILE,
  NAV_SIGN_UP,
  NAV_VERIFY_MOBILE,
} from './constants';
import SignUp from '../screens/signUp';
import VerifyMobileNumber from '../screens/verifyMobileNumber';

const Stack = createNativeStackNavigator();

/**
 * MainStackNavigator
 * desc: used for managing the app's screens stack/routes
 */
const MainStackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    checkLogin().then(res => {
      setIsLoggedIn(res != null);
      setShowLoader(false);
    });

    return () => {
      setIsLoggedIn(false);
      setShowLoader(false);
    };
  }, []);

  return (
    <>
      {showLoader ? (
        <ScreenLoader bgColor={colors.ghostWhite} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: false,
              headerTitleAlign: HEADER_TITLE_CENTER,
            }}>
            {isLoggedIn ? (
              <Stack.Screen
                name={NAV_HOME_SESSION}
                component={TabStackNavigator}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name={NAV_LOGIN}
                component={Login}
                options={{headerShown: false}}
              />
            )}

            <Stack.Screen
              name={NAV_HOME}
              component={TabStackNavigator}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name={NAV_PROFILE}
              component={Profile}
              options={() => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name={NAV_SIGN_UP}
              component={SignUp}
              options={() => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name={NAV_VERIFY_MOBILE}
              component={VerifyMobileNumber}
              options={() => ({
                headerShown: false,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default MainStackNavigator;
