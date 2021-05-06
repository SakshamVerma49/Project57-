import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import JokeScreen from './screens/JokeScreen'
import Horoscope from './screens/Horoscope'
import Weather from './screens/Weather'
import NewsScreen from './screens/NewsScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen : JokeScreen,
  Horoscope:Horoscope,
  Weather: Weather,
  NewsScreen: NewsScreen,
})

const AppContainer = createAppContainer(AppNavigator)