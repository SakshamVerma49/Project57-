import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightgreen',
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;