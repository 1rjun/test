import React, { Component, useState, useEffect } from 'react'
import { Text, View, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'native-base'
import storageApi from '../../utilities/storage'
import { CommonActions } from '@react-navigation/native'
export default  Login = (props) => {

    const [admin, setAdmin] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        (props)=>{
            checkIfTokenExist(props)   
            console.log(admin)
            console.log(password)
        },[]
    )

    const checkIfTokenExist =async() =>{
        const name = await storageApi.retriveItem("name")
        // alert(name)
        // alert(JSON.stringify(props))
        if(name) return props.navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{
                    name:'Tab'
                }]
            }))
    }   

    const loginNow = async(props) =>{
        if(!name.trim()) return Alert.alert("TestApp","Please enter your name")
        if(!admin.trim()) return Alert.alert("TestApp","Please enter username")
        if(!password.trim()) return Alert.alert("TestApp","Please enter password")
        if(admin!='admin'||password!='admin') return Alert.alert("TestApp","Username and password is incorrect")
        const saveAdminName = await storageApi.storeToken("name", name)
        return props.navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{
                    name:'Tab'
                }]
            }))
    }

    return(
        <View style={style.containerStyle}>
            <CustomTextInput type="Enter your name" onChangeText={
                (value)=>setName(value)
            }/>
            <CustomTextInput type="username" onChangeText={
                (value)=>setAdmin(value)
            }/>
            <CustomTextInput type="password" onChangeText={
                (value)=>setPassword(value)
            }/>
            <Button style={style.buttonStyle} onPress={
                ()=>loginNow(props)
            }>
                <Text style={style.buttonText}>Submit</Text>
            </Button>
        </View>
    )
}



const CustomTextInput = (props) => {
    return(
        <View style={style.textInputStyle}>
            <TextInput placeholder={props.type} onChangeText={
                (value)=>props.onChangeText(value)
            } secureTextEntry={props.type=='password'?true:false}/>
        </View>
    )
}

const style = {
    buttonStyle:{
        backgroundColor:'green',
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