import React from 'react';
import { StackNavigator} from 'react-navigation';
import { AppRegistry } from 'react-native';
import Splash from './App';
import Home from './Home';

AppRegistry.registerComponent('KSProj', () => App);

const RootStack = StackNavigator(
  {
    Splash: { screen: Splash },
    Home:   { screen: Home   }
  },
  {
    initialRouteName: 'Splash',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
