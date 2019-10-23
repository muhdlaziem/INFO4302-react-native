import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import {readline} from 'readline';


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      year: 2019,
      name: 'Laziem',
      subject: ['nlp','mad'],
      // Search: () => function(){}   do not use fucntion in object
    }

  }
  updateYear(){
    this.setState({year:2020});
    alert('You clicked this')

  }
  updateName = ()=> {
    this.setState({name:'yusuf'});
    alert('You clicked this')

  }
  render(){
    return(

      <View style={styles.container}>
        {/* <Text>Saya Laziem. Saya</Text> */}
        <Text>{this.state.name}</Text>

        <Button onPress={()=>{
          this.updateYear(); 
          }} title='Change Year' />

        <Text>{this.state.year}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Button onPress={this.updateName} title='Change Name'/>

        <Text>Hai</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

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