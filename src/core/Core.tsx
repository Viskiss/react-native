/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NotifierWrapper } from 'react-native-notifier';

import { StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Navigation from 'src/navigation/Navigation';

import store from 'src/redux/store';

function Core(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaProvider>
        <Provider store={store}>

          <StatusBar
            barStyle="dark-content"
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <NotifierWrapper>
            <Navigation />
          </NotifierWrapper>

        </Provider>
    </SafeAreaProvider>
  );
}

export default Core;
