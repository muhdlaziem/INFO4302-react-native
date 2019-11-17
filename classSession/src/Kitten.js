import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';


let counter = 0

countTasbih = () => {
    counter = ({counter =  Number(counter +=1)},
        () => {
            if(this.state.counter === 33){
                this.state.counter = 0
                Alert.alert(`Your Counter has reached 33 !`)
            }
        }
    )
    
}
const ApplicationContent = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Welcome to UI Kitten</Text>
    <Button title="saya">dsffsdfdsfs</Button>
  </Layout>
); 

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <ApplicationContent />
  </ApplicationProvider>
);

export default App;