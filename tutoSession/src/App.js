import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import List from './List';
class componentName extends Component {
  constructor(){
    super()
    this.state={
      name: "LAZIEM",
      class: 'MobileApp'
    }
  }
  changeName = () => {
    if(this.state.name === 'LAZIEM'){
      this.setState({
        name:'FAIZ',
        class: 'react-native'
      })
    }
    else if(this.state.name === 'FAIZ'){
      this.setState({
        name:'LAZIEM',
        class: 'MobileApp'

      })
    }
   
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.state.name}</Text>
        <Text></Text>
        <Text></Text>
        <Text>{this.state.class}</Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity style = {{backgroundColor:'black'}} onPress={this.changeName}>
          <Text style = {{color:'white'}}>Change Name</Text>
        </TouchableOpacity>
        <List></List>
      </SafeAreaView>
     
    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});