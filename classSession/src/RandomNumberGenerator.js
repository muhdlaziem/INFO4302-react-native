import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,

} from "react-native";

class RandomNumberGenerator extends Component {
    constructor(){
        super();
        this.state = {
            randomnumber : 0
        }
    }
    // function random() {
    //     let random = parseInt(Math.random() * (30 - 0) + 0);
    //     while(storeBookID.includes(random))
    //         random = parseInt(Math.random() * (30 - 0) + 0);
    //     return random;
    //   }
    getRandomNumber = () => {
        this.setState({randomnumber: parseInt(Math.random() * (10000 - 0) + 0)})
    }
    render() {
        return (
            <View style={styles.container}>
                <Button color= '#841584' onPress= {this.getRandomNumber} title='GET NUMBER'/>
                <Text></Text>
                <Text></Text>
                <Text>{this.state.randomnumber}</Text>

            </View>
        );
    }
}
export default RandomNumberGenerator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});