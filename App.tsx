import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash'

import {styles} from './App.style';
import RootNavigator from './src/navigation/RootNavigation';
import store from './src/redux/store';

export default function App() {
  const onReady = () => {
    RNBootSplash.hide({fade: true});
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavigationContainer onReady={onReady}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
