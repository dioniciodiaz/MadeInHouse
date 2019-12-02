import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {NavigationNativeContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import store from './src/store';
import theme from './src/theme';
import {AppTab} from './src/config/tabs';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationNativeContainer>
          <AppTab />
        </NavigationNativeContainer>
      </ThemeProvider>
    </Provider>
  );
}
