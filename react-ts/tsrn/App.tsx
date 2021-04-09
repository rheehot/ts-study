import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/modules';
import AnimateNavigator from './src/container/animate/AnimateNavigator';

const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AnimateNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
