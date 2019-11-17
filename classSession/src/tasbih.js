import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class tasbih extends Component {
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }

    countTasbih = () => {
        this.setState({counter: Number(this.state.counter +=1)},
            () => {
                if(this.state.counter === 33){
                    this.state.counter = 0
                    Alert.alert(`Your Counter has reached 33 !`)
                }
            }
        )
        
    }
    resetTasbih = () => {
        this.setState({counter:0})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Tasbeeh</Text>
                <Text></Text>
                <Text></Text>
                <Button type = 'outline'  onPress = {this.countTasbih} title = 'COUNT TASBEEH'/>
                <Text></Text>
                <Text></Text>

                <Button onPress = {this.resetTasbih} title = 'RESET TASBEEH'/>
                <Text></Text>
                <Text></Text>
                <Text>{this.state.counter}</Text>

            </View>
        );
    }
}
export default tasbih;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});