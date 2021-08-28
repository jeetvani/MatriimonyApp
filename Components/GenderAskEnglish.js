import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class GenderAskEnglish extends React.Component {

    render() {
        //If Person is Male
        const Maleselection = () => {
            AsyncStorage.setItem("Gender", "Male")
            this.props.navigation.navigate("MainFormEnglish")
        }
        //If Person is Male
        //If Person is Female
        const Femaleselection = () => {
            AsyncStorage.setItem("Gender", "Female")
            this.props.navigation.navigate("MainFormEnglish")
        }
        //If Person is Female

        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={Femaleselection}>
                        <Image source={{ uri: 'https://png.pngtree.com/element_origin_min_pic/16/12/16/8cd09b4602928157ec9c996d3ffc6411.jpg' }} width={80} />
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Female</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={Maleselection}>
                        <Image source={{ uri: 'https://thumbs.dreamstime.com/z/indian-asian-oriental-culture-cartoon-indian-asian-religion-oriental-culture-young-man-isolated-cartoon-vector-illustration-156974798.jpg' }} width={60} />
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Male</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}