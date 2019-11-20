import React, { Component } from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import FormScreen from "./Screens/FormScreen";
import geolocater from "./src/geolocater";
import BMICalculator from "./src/BMICalculator"
import RandomNumberGenerator from "./src/RandomNumberGenerator";



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Form: FormScreen,
    GeoLocater : geolocater,
    BMICalculator : BMICalculator,
    RandomNumber : RandomNumberGenerator
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}