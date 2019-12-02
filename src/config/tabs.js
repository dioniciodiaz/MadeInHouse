import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileStack, RecipesStack} from './stack';
import {Icon} from 'native-base';
import theme from '../theme';

const Tab = createBottomTabNavigator();

const defaultsOptions = {
  activeTintColor: theme.SECONDARY_COLOR3,
  activeBackgroundColor: theme.SECONDARY_COLOR,
  inactiveTintColor: theme.SECONDARY_COLOR2,
  inactiveBackgroundColor: theme.SECONDARY_COLOR2,
  showLabel: true,
  showIcon: true,
  style: {},
  labelStyle: {},
  labelPosition: 'beside-icon',
  tabStyle: {},
  allowFontScaling: true,
  adaptive: true,
  safeAreaInset: {},
  keyboardHidesTabBar: true,
};

const configHome = {
  title: 'Home',
  tabBarVisible: true,
  tabBarIcon: (focused, color, size) => (
    <Icon name="md-list-box" type="Ionicons" color={color} size={size} />
  ),
  tabBarLabel: 'Home',
  tabBarButton: props => <TouchableOpacity {...props} />,
  tabBarAccessibilityLabel: 'Home',
};

const configProfile = {
  title: 'Home',
  tabBarVisible: true,
  tabBarIcon: (focused, color, size) => (
    <Icon name="user-circle" type="FontAwesome5" color={color} size={size} />
  ),
  tabBarLabel: 'Home',
  tabBarButton: props => <TouchableOpacity {...props} />,
  tabBarAccessibilityLabel: 'Home',
};
const AppTab = () => (
  <Tab.Navigator initialRouteName="Home" tabBarOptions={defaultsOptions}>
    <Tab.Screen name="Home" component={RecipesStack} options={configHome} />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={configProfile}
    />
  </Tab.Navigator>
);

export {AppTab};
