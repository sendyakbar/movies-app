import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {styles} from './App.style';
import RootNavigator from './src/navigation/RootNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
