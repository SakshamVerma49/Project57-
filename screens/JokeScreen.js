import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Button } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class JokeScreen extends React.Component {
  render(){
    return(
      <View>
              <AppHeader name="Joke Screen"/>
              <Text>This joke is very funny.</Text>
      </View>
    )
  }
}
