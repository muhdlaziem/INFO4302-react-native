import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
} from "react-native";

class List extends Component {
    constructor(){
        super()
        this.state={
          name: "Syafiq",
          class: 'r15'
        }
      }
      changeName = () => {
        if(this.state.name === 'Syafiq'){
          this.setState({
            name:'FAIZ',
            class: 'myvi'
          })
        }
        else if(this.state.name === 'FAIZ'){
          this.setState({
            name:'Syafiq',
            class: 'r15'
    
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
            </SafeAreaView>
        );
    }
}
export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});