import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Counter from './src/screen/Counter/CounterNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/modules';
import GithubContainer from './src/container/Github/GithubContainer';

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Counter">
          <Tab.Screen name="GithubContainer" component={GithubContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
