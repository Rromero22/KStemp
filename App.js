import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={() => navigate('Home')}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#fff" />
        <Image source={require('./assests/logo.jpg')}></Image>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
