import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as RecipesScreens from '../screens/Recipes';
import ProfileScreen from '../screens/Profile';

const Recipes = createStackNavigator();
const Profile = createStackNavigator();

const defaultOptions = {};

const RecipesStack = () => (
  <Recipes.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={defaultOptions}>
    <Recipes.Screen name="Home" component={RecipesScreens.Home} />
    <Recipes.Screen name="ViewRecipes" component={RecipesScreens.View} />
  </Recipes.Navigator>
);

const ProfileStack = () => (
  <Profile.Navigator>
    <Profile.Screen name="Profile" component={ProfileScreen} />
  </Profile.Navigator>
);

export {RecipesStack, ProfileStack};
