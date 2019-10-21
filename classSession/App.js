import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default class App extends Component{

  render(){
    return(

      <View style={styles.container}>
        <Text>Saya Laziem</Text>
        <Text>Hai</Text>
        <Button
         onPress={() => {
           
          alert('You tapped the button!');
        }}
        title="Press Me"/>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e08283',
  }
});


//can use multiple view (Nested View)