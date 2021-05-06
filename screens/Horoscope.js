import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Horoscope extends React.Component {
  render(){
    return(
      <View>
              <AppHeader name="Horscope"/>
              <Text style={{fontWeight:'bold',paddingLeft:15}}> Virgo </Text>
              <Text style={{padding:15}}>It’s not always easy for you to have faith in the process, Virgo. You crave tangible evidence that things are happening. Now more than ever, the universe is imploring you to surrender to the power of belief. This story is highlighted on the job front today, as the far-seeing Aquarius moon aligns with big-picture Jupiter and sweet Venus. Later, Luna dips into Pisces, directing your energy towards relationship matters.</Text>
      </View>
    )
  }
}
