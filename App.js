import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import * as screen from './src/screens';
import store from './src/store';
import theme from './src/theme';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{}}>
            <Stack.Screen name="Home" component={screen.Home} />
            <Stack.Screen name="ViewRecipe" component={screen.ViewRecipes} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationNativeContainer>
    </Provider>
  );
}
