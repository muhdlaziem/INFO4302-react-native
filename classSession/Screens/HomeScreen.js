import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Home Screen</Text>
        </View>
        <View >
            <Button  onPress={() => this.props.navigation.navigate('Details')} title="Details"  />
            <Text></Text>
            <Button  onPress={() => this.props.navigation.navigate('Form')} title="Form"  />
            <Text></Text>
            <Button  onPress={() => this.props.navigation.navigate('GeoLocater')} title="GeoLocater" />
            <Text></Text>
            <Button  onPress={() => this.props.navigation.navigate('BMICalculator')} title="BMICalculator"  />
            <Text></Text>
            <Button  onPress={() => this.props.navigation.navigate('RandomNumber')} title="RandomNumber" />



        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    // flexDirection: 'row',
    marginBottom: 100,
    height: 100
  }
});