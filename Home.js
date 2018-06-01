import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#FF00D0', fontSize:40}}>
          KEEP
          <Text style={{color: '#FFEE66', fontSize:40}}>
            INGS
            <Text style={{color: '#80FF00', fontSize:40}}>
              CORE
              </Text>
           </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
});
