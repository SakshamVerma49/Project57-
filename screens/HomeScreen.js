import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import td from '../assets/thumbsdown.png';
import tu from '../assets/thumbsup.png';
import FeatureButton from '../components/FeatureButton';
export default class HomeScreen extends React.Component {
  goToScreen = (screen) => {
    this.props.navigation.navigate(screen, { color: 'yellow' });
  };
  constructor() {
    super();
  } 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader name="News Letter" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen('JokeScreen');
          }}>
          <Text style={styles.buttonText}>Read a Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen('Horoscope');
          }}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen('Weather');
          }}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen('NewsScreen');
          }}>
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={styles.buttonText}>Rate Us</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={[styles.ImageStyle, { marginTop: 5 }]} source={td} />
            <Image style={styles.ImageStyle} source={tu} />
          </View>
        </TouchableOpacity>
              </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 30,
    width: 200,
    height: 50,
    backgroundColor: 'lightgreen',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  ImageStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  // MainHeaderStyle: {
  //   textSize: 40,
  //   backgroundColor: 'lightgreen',
  //   alignSelf: 'center',
  // },
});



