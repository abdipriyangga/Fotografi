/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import RootNavigator from './src/components/navigators/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar backgroundColor={"#000"} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
