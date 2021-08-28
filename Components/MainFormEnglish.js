import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
import { TextInput, Button, Menu, Divider, Provider } from 'react-native-paper';
//FireBase Stuff
import firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
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


export default class MainFormEnglish extends React.Component {

    async Register() {
        if (this.state.Name == "") {
            alert("Kindly Enter a Valid Name")
        }
        else {
            if (this.state.FatherName == "") {
                alert("Kindly Enter a Valid Father's Name")
            } else {
                if (this.state.Age == "") {
                    alert("Kindly Enter a Valid Age")
                } else {
                    if (this.state.Age < 20) {
                        alert("Sorry You are not eligible for the Registration")
                    } else {
                        if (this.state.Height == "") {
                            alert("Please Eneter Your Height")
                        } else {
                            if (this.state.Height > 7) {
                                alert("Please don't act oversmart write your correct age in FT")
                            } else {
                                let UserGender = await AsyncStorage.getItem("Gender")


                                //Firebase Queries

                                await firebase
                                    .database()
                                    .ref(UserGender + '/' + JSON.stringify(this.state.Age)).push()
                                    .set({
                                        Name: this.state.Name,
                                        FatherName: this.state.FatherName,
                                        Gender: UserGender,
                                        Age: this.state.Age,
                                        Height: this.state.Height,
                                        //Firebase Queries

                                    })
                                AsyncStorage.setItem("Username", this.state.Name)
                                AsyncStorage.setItem("FatherName", this.state.FatherName)
                                AsyncStorage.setItem("Age", this.state.Age)

                            }
                        }
                    }
                }
            }
        }
    }

    state = {
        RegionSelectMenu: false,
        Name: '',
        FatherName: '',
        Height: 0,
        Age: 0
    }
    render() {
        const openMenu = () => this.setState({ RegionSelectMenu: true });

        const closeMenu = () => this.setState({ RegionSelectMenu: false });

        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                    label="Your Name"
                    mode="outlined"
                    onChangeText={text => this.setState({ Name: text })}
                />
                <TextInput
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                    label="Father's Name"
                    mode="outlined"
                    onChangeText={text => this.setState({ FatherName: text })}
                />
                <TextInput
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                    label="Age"
                    keyboardType="numeric"
                    maxLength={2}
                    mode="outlined"
                    onChangeText={text => this.setState({ Age: text })}
                />
                <TextInput
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                    label="Height(in FT)"
                    keyboardType="numeric"

                    mode="outlined"
                    onChangeText={text => this.setState({ Height: text })}
                />
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.Register.bind(this)} >
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 8, color: 'white', borderRadius: 8, backgroundColor: 'blue', fontWeight: 'bold', fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}