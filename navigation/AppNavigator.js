import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import BattoleNavigator from './BattoleNavigator';
import AuthStack from './SignInNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignUpStack from './SignUpNavigator';
import FoodFormStack from './FoodFormNavigator';


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Battole: BattoleNavigator,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen,
  SignUp: SignUpStack,
  FoodForm: FoodFormStack
},{
  initialRouteName: 'AuthLoading'
});