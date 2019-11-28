import React, {Component} from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {geolocater}from './geolocater';
import {BMICalculator} from './BMICalculator';
import {RandomNumberGenerator} from './RandomNumberGenerator';
import {tasbih} from './tasbih';

const BottomNav = createMaterialBottomTabNavigator({
    geolocater:{
        screen: geolocater,
        navigationOptions: {
            // 
        }
    },
    BMI:{
        screen:BMICalculator,
        navigationOptions:{
            // 
        }
    }
)