/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {RTLProvider} from 'react-native-easy-localization-and-rtl';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import MainStackNavigator from './navigation/mainStackNavigator';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Toast from 'react-native-toast-message';
import {initLanguage} from './localization/utils';
import UploadComponent from './uploadManager/uploadComponent';
import DownloadingComponent from './download/downloadComponent';

const App = () => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    initLanguage(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <RTLProvider>
      {isLoaded && (
        <Provider store={store}>
          <GestureHandlerRootView style={styles.gestureView}>
            <MainStackNavigator />
            <Toast />
            <UploadComponent />
            <DownloadingComponent/>
          </GestureHandlerRootView>
        </Provider>
      )}
    </RTLProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
  },
});
