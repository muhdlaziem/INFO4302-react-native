import * as firebase from "firebase";
import React, {Component} from 'react';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';



 let config = {
    apiKey: "AIzaSyAtVWqdhQx5IssWiQz7n20AYWJJgv3rGYU",
    authDomain: "classsession-90743.firebaseapp.com",
    databaseURL: "https://classsession-90743.firebaseio.com",
    projectId: "classsession-90743",
    storageBucket: "classsession-90743.appspot.com",
    messagingSenderId: "52933025459",
    appId: "1:52933025459:web:0b8bbaa0f22ced50b49ac6",
    measurementId: "G-6T929G110Z"

  };
let the_firebase = firebase.initializeApp(config);

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    SignUp = (email,password) => {
        try{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(user => {
                console.log(user);
            });
            Alert.alert('Signup Successful');
        }
        catch(error){
            // console.log(erorr.toString(error));
            Alert.alert('Signup unSuccessful');

        }
    };

    Login = (email, password) => {
        try {
          firebase
             .auth()
             .signInWithEmailAndPassword(email, password)
             .then(res => {
                 console.log(res.user.email);
          });
          Alert.alert('Login Successfull');}
        catch (error) {
        //   console.log(error.toString(error));
          Alert.alert('Login unsuccessful')
        }
    };

    render() {
        return (
          <Container>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                 autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={email => this.setState({email})}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText = {password => this.setState({password})}
                />
              </Item>
              <Button full rounded success
               onPress={() => this.Login(this.state.email, this.state.password)}>
                <Text>Login</Text>
              </Button>

              <Button full rounded success
               style={{ marginTop: 20 }}
               onPress = {() => this.SignUp(this.state.email,this.state.password)}> 
                <Text>Signup</Text>
              </Button>
            </Form>
          </Container>
        );
      }
}

