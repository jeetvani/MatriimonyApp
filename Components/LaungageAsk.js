import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
class LanguageAsk extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingVertical: 20 }} onPress={() => { this.props.navigation.navigate("GenderAskHindi") }}>
                    <Image source={{ uri: 'https://icon2.cleanpng.com/20180409/udq/kisspng-hindi-national-language-hindustani-language-englis-hinduism-5acb1aea901041.3227739115232601385901.jpg' }} width={80} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 20 }} onPress={() => { this.props.navigation.navigate("GenderAskEnglish") }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        English
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }


}
export default LanguageAsk;