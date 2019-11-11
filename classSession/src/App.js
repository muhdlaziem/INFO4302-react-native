import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BookDisplay} from './myLib/BookDisplay';
// import {readline} from 'readline';


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      year: 2019,
      name: 'Laziem',
      subject: ['nlp','mad'],
      book: 'One Piece'
      // Search: () => function(){}   do not use fucntion in object
    }

  }
  updateYear(x){
    this.setState({year:x});
    alert('You clicked this')

  }
  updateName = ()=> {
    this.setState({name:'yusuf'});
    alert('You clicked this')

  }
  updateBook = ()=> {
    this.setState({book:'Fire Force'});
    // alert('You clicked this')

  }
  render(){
    return(

      <View style={styles.container}>
        {/* <Text>Saya Laziem. Saya</Text> */}
        <Text>{this.state.name}</Text>

        <Button onPress={()=>{
          this.updateYear(12345); 
          }} title='Change Year' color='black'/>

        <Text>{this.state.year}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Button onPress={this.updateName} title='Change Name'/>

        <Text>Hai</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Button
         onPress={() => {
           
          alert('You tapped the button!');
        }}
        title="Press Me"/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button onPress={this.updateBook} title='Change Book'/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <BookDisplay updateBook={()=> this.updateBook()} book= {this.state.book}/>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e08283',
  }
});




//can use multiple view (Nested View)