import React, { Component, useState, useEffect } from 'react'
import { Text, View, Alert, BackHandler } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'native-base'
import storageApi from '../../utilities/storage'
import { CommonActions } from '@react-navigation/native'
export default  Homepage = (props) => {

    const [name, setName] = useState("")

    const logout = async(props) =>{
        await storageApi.removeTokens()
        return props.navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{
                    name:'Login'
                }]
            })
        )
    }
  

  useEffect(() => {
    renderName()
    return function cleanup() {
        BackHandler.removeEventListener('hardwareBackPress', backAction)
    };
  });
  const backAction = () => {
    Alert.alert("TestApp", "Are you sure you want to exit from the app?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
    

    const renderName = async() => {
        try {
            const name = await storageApi.retriveItem("name")
            BackHandler.addEventListener('hardwareBackPress',backAction)
            if(name) setName(name)
        } catch (err) {
            
        }
    }

    return(
        <View style={style.containerStyle}>
            <Text>Hi {name}</Text>
            
            <Button style={style.buttonStyle} onPress={
                ()=>logout(props)
            }>
                <Text style={style.buttonText}>Logout</Text>
            </Button>
        </View>
    )
}


const style = {
    buttonStyle:{
        backgroundColor:'red',
        justifyContent:'center',
        marginHorizontal:50,
        marginVertical:20
    },
    containerStyle:{
        padding:30
    },
    textInputStyle:{
        backgroundColor:'lightgrey',
        marginVertical:5,
        borderRadius:10,
        paddingLeft:10
    },
    buttonText:{
        color:'white'
    }
}