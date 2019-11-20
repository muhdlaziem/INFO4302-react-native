import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert
} from "react-native";
// import {Button} from 'react-native-elements';


class BMICalculator extends Component {
    constructor(){
        super();
        this.state = {
        weight: 0,
        height: 0,
        bmi: 0
        }
    }
    
    calculateBMI = () => {
        this.setState({bmi: Number((
            this.state.weight/Math.pow(this.state.height,2)
        ) * 10000).toFixed(1)},
        () => {
            if(this.state.bmi < 18.5){
                Alert.alert('You are Underweight !');
            }
            else if (this.state.bmi>= 18.5 && this.state.bmi <= 24.9){
                Alert.alert('You are having Normal Weight. Well done !!');
            }
            else if(this.state.bmi >= 25 && this.state.bmi <= 29.9){
                Alert.alert('You are Overweight !');
            }
            else if(this.state.bmi >= 30){
                Alert.alert('You ar Obese. Please watch your DIET!!');
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>BMI Calculator</Text>
                <TextInput onChangeText = {(weight) => this.setState({weight})}
                placeholder = 'Weight ing KG'/>
                <TextInput onChangeText = {(height) => this.setState({height})}
                placeholder = 'Height in CM'/>
                <Button color = '#841584' onPress = {this.calculateBMI} title = 'Calculate'/>
                <Text></Text>
                <Text></Text>

                <Text>BMI: {this.state.bmi}</Text>

            </View>
        );
    }
}
export default BMICalculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});