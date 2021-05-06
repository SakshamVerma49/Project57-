import * as React from 'react';
import {View, Text, Stylesheet} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class NewsScreen extends React.Component{
  render(){
    return(
      <View>
      
      <AppHeader name = "News"/>
      <Text style = {{padding: 10}}>Breaking news, the British has left India(1947)</Text>
      </View>
    );
  }
}