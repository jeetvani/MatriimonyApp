import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
import { TextInput } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
//FireBase Stuff
import firebase from "firebase";
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

export default class MainFormHindi extends React.Component {
    async Register() {
        if (this.state.Name == "") {
            alert("कृपया सही नाम डाले ")
        }
        else {
            if (this.state.FatherName == "") {
                alert("कृपया अपने पिता का नाम डाले ")
            } else {
                if (this.state.Age == "") {
                    alert("कृपया अपनी उम्र डाले ")
                } else {
                    if (this.state.Age < 20) {
                        alert("आपकी उम्र अभी रजिस्ट्रेशन के लिए नहीं है ")
                    } else {
                        if (this.state.Height == "") {
                            alert("अपना कद डाले ")
                        } else {
                            if (this.state.Height > 7) {
                                alert("अपना कद सही डाले (फिट में )")
                            } else {
                                this.setState({ Registrationinprocess: true })
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
        Registrationinprocess: false,
        Name: '',
        FatherName: '',
        Age: 0,
        Height: 0,
    }
    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.Registrationinprocess ? <View>
                    <ActivityIndicator
                        size={40}
                        color="blue"
                    />
                </View> :
                    <View>
                        <TextInput
                            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            label="आपका नाम "
                            mode="outlined"
                            onChangeText={text => this.setState({ Name: text })}
                        />
                        <TextInput
                            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            label="पिता का नाम "
                            mode="outlined"
                            onChangeText={text => this.setState({ FatherName: text })}
                        />
                        <TextInput
                            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            label="उम्र"
                            keyboardType="numeric"
                            maxLength={2}
                            mode="outlined"
                            onChangeText={text => this.setState({ Age: text })}
                        />
                        <TextInput
                            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            label="कद"
                            keyboardType="numeric"

                            mode="outlined"
                            onChangeText={text => this.setState({ Height: text })}
                        />
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.Register.bind(this)}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 8, color: 'white', borderRadius: 8, backgroundColor: 'blue', fontWeight: 'bold', fontSize: 20 }}>रजिस्टर करे </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}