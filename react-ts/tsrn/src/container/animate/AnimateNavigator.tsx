import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AnimateHome from './Home/AnimateHome';
import CounterContainer from '../Counter/CounterContainer';
import GithubContainer from '../Github/GithubContainer';
import AwesomeSlideContainer from '../Slide/AwesomeSlideContainer';
import Wallet from '../Wallet/Wallet';

export type RootStackParamList = {
  AnimateHome: undefined;
  CounterContainer: undefined;
  GithubContainer: undefined;
  AwesomeSlideContainer: undefined;
  Wallet: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function AnimateNavigator() {
  return (
    <Stack.Navigator initialRouteName="AnimateHome">
      <Stack.Screen
        name="AnimateHome"
        component={AnimateHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="CounterContainer" component={CounterContainer} />
      <Stack.Screen name="GithubContainer" component={GithubContainer} />
      <Stack.Screen
        name="AwesomeSlideContainer"
        component={AwesomeSlideContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Wallet" component={Wallet} />
    </Stack.Navigator>
  );
}

export default AnimateNavigator;
