import * as React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

export default class FeatureButton extends React.Component{
    goToScreen = (screen) => {
    this.props.navigation.navigate(screen, { color: 'yellow' });
  };
  constructor(){
    super();

  }
  render(){
    return(
      <View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen('JokeScreen');
          }}>
          <Text style={styles.buttonText}>{this.props.name}</Text>
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
    backgroundColor: 'lightgreen'
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
  },
})