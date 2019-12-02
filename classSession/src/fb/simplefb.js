import React, { Component } from "react";
import * as firebase from "firebase";
import { 
    SafeAreaView,
    Text,
    StyleSheet
} from "react-native";

import { Container, Item, Form, Input, Button, Label } from "native-base";


const config = {
    apiKey: "AIzaSyAtVWqdhQx5IssWiQz7n20AYWJJgv3rGYU",
    authDomain: "classsession-90743.firebaseapp.com",
    databaseURL: "https://classsession-90743.firebaseio.com",
    projectId: "classsession-90743",
    storageBucket: "classsession-90743.appspot.com",
    messagingSenderId: "52933025459",
    appId: "1:52933025459:web:0b8bbaa0f22ced50b49ac6",
    measurementId: "G-6T929G110Z"

  };
export const app = firebase.initializeApp(config);

class simplefb extends Component {

    constructor(props){
        super(props);
        this.state = {
            link:"",
            content:[]
        }
    }

    addItem =(link) => {
        let newPostKey = app.database().ref().child('item').push().key;
        let updates = {};
        updates['/item/' + newPostKey] = {Link:link}
        firebase.database().ref().update(updates);
        console.ignoredYellowBox = ['Setting a timer'];
        // db.ref('/items').push({
        //     desc : item
        // });
    }

    readUserData = () => {

        firebase.database().ref('item/').on('value', snapshot => {
            console.log(snapshot.val())
            this.state.content.push({
                id:snapshot.key,
                Link:snapshot.Link
            })
            
        });
    }

    
    render() {
        return (
            
                <Container>
                    <Form>
                    <Item floatingLabel>
                        <Label>name</Label>
                        <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={link => this.setState({link})}
                        />
                    </Item>
                   
                    <Button full rounded success
                    onPress={() => this.addItem(this.state.link)}>
                        <Text>Add</Text>
                    </Button>

                    <Button full rounded success
                    onPress={this.readUserData}
                    style = {{marginTop:100}}>
                        <Text>getdata</Text>
                    </Button>
                    <Text>{this.state.link}</Text>

                    {/* <Button full rounded success
                    style={{ marginTop: 20 }}
                    onPress = {() => this.SignUp(this.state.email,this.state.password)}> 
                        <Text>Signup</Text>
                    </Button> */}
                    </Form>
                </Container>
        );
    }
}
export default simplefb;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});