import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';



type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
  SplashScreen.hide();
  }
  render() {
    return (
      const { navigate } = this.props.navigation;
      <TouchableWithoutFeedback onPress={() =>
         navigate('Home')
        }>
      <View style={styles.container}>
      <Image source={require{'./assests/logo.jpg'}}></Image>
        </Text>
      </View>
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
