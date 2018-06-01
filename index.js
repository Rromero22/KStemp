import React from 'react';
import { StackNavigator} from 'react-navigation';
import { AppRegistry } from 'react-native';
import App from './App';
import Home from './Home';

//AppRegistry.registerComponent('KSProj', () => App);

const RootStack = StackNavigator({
    App: {screen: App, },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'App',
  }
);
