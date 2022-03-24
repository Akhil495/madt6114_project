import React,{ Component } from "react";


import {Button, Text, TextInput, View, Keyboard, Alert} from 'react-native';
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            name: '',
          }
    }
       _saveClick() {
           Keyboard.dismiss();
Alert.alert("Message","Hi "+ this.state.name);

    
 }
    render()
    {
        return (
            <View
            style={{
              flex: 1,
              marginTop:80,
              alignItems: 'stretch',
                padding:10
            }}>
      <Text style={{ fontSize:24,textAlign:'center',marginBottom:20 }}>Hi, Please fill the Details</Text>
      
              <Text>Enter Name</Text>
               <TextInput
              style={{height: 40,borderColor:'gray',borderWidth:1,width:View.width,paddingLeft:5,marginTop:5,marginBottom:10}}
              placeholder="Enter Name"
              onChangeText={(text) => this.setState({name:text})}
            />

      
            <Button title="SAVE" style={{ marginTop:10 }}
            onPress={() => this._saveClick()}
            >SAVE</Button>
      

      
          </View>
        )
    }
}