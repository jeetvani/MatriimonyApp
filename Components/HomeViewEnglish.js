import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
import { TextInput, Button, Menu, Divider, Provider } from 'react-native-paper';
//FireBase Stuff
import firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { render } from 'react-dom';
const firebaseConfig = {
    apiKey: "AIzaSyBaiZ95QV6DpEliH9hE5iCujZTzYM3-zt4",
    authDomain: "samaajshaadi.firebaseapp.com",
    databaseURL: "https://samaajshaadi-default-rtdb.firebaseio.com",
    projectId: "samaajshaadi",
    storageBucket: "samaajshaadi.appspot.com",
    messagingSenderId: "465115708369",
    appId: "1:465115708369:web:69eca2c8d1ed08840bbef0",
    measurementId: "G-2LRJXXRM1F"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
//FireBase Stuff

export default class HomeViewEnglish extends React.Component {
    render() {
        return (

            <View style={{flex:1,justifyContent:'center'}}>
<ScrollView pagingEnabled={true}>
    <View style={{alignItems:'center'}}>
    <Image height={Dimensions.get('screen').height} source={{uri:'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
<Text style={{color:'white',textAlign:'left',fontWeight:'bold',fontSize:20,position:'absolute',top:Dimensions.get('screen').height*0.8}}>Jeet Vani</Text>

    </View>
    <View style={{alignItems:'center'}}>

    <Image height={Dimensions.get('screen').height} source={{uri:'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
    <Text style={{color:'white',fontWeight:'bold',fontSize:20,position:'absolute',top:Dimensions.get('screen').height*0.8}}>Jeet Vani</Text>
 
    </View>

</ScrollView>
            </View>
         )

    }
}