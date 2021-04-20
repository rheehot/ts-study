import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
