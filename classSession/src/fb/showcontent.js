import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native";
import { List, ListItem } from "react-native-elements";
import {app} from './simplefb';


export default class showcontent extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[]
        }
    }
    componentDidMount(){
        app.database().ref('item/').on('value', snapshot => {
            console.log(snapshot.val())
            let data = [];
            snapshot.forEach(child =>{
              data.push({
                Link: child.val().Link,
                key: child.key
              });
            });
            this.setState({
              content:data
            })
            // console.log(snapshot.val())
            // // let data = snapshot.val()
            // console.log(`Data: ${snapshot.val().key.Link}`)
            console.log(this.state.content)
            
        });
    }
    render() {
        return (
          <View>
            <List></List>
          </View>
          );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ebebeb'
    }
  });