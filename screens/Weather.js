import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Weather extends React.Component {
  render(){
    return(
      <View>
              <AppHeader name="Weather"/>
              <Text style={{fontWeight:'bold',paddingLeft:15}}> Weather </Text>
              <Text style={{padding:15}}>Today the weather is sunny.</Text>
      </View>
    )
  }
}
