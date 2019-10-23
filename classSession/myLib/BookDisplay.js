import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export class BookDisplay extends Component {
    constructor(){
        super();
        this.state = {
            // book : 'React Native is Awesome'
        };
    }
    render() {
      return (
        <View>
          <Text onPress ={this.props.updateBook}>{this.props.book}</Text>
        </View>
      );
    }
  }