import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/modules';
import GithubContainer from './src/container/Github/GithubContainer';
import CounterContainer from './src/container/Counter/CounterContainer';
import AnimateNavigator from './src/container/animate/AnimateNavigator';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AnimateNavigator />
        {/* <Tab.Navigator
          initialRouteName="Counter"
          tabBarOptions={{
            activeTintColor: '#4c6ef5',
            showLabel: false,
          }}>
          <Tab.Screen
            name="Animate"
            component={AnimateNavigator}
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="swarm" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen name="GithubContainer" component={GithubContainer} />
          <Tab.Screen name="CounterContainer" component={CounterContainer} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
