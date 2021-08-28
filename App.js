import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LanguageAsk from './Components/LaungageAsk';
import GenderAskEnglish from './Components/GenderAskEnglish';
import GenderAskHindi from './Components/GenderAskHindi';
import MainFormEnglish from './Components/MainFormEnglish';
import MainFormHindi from './Components/MainFormHindi';
import HomeViewEnglish from './Components/HomeViewEnglish';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

export default function App() {
  async function CheckUserexist() {
    const Username = await AsyncStorage.getItem("Username")
    const FatherName = await AsyncStorage.getItem("FatherName")
    const Age = await AsyncStorage.getItem("Age")
    const Gender = await AsyncStorage.getItem("Gender")
    console.log(Username);
    console.log(FatherName);
    console.log(Age);
    console.log(Gender);
  }
  CheckUserexist()
  return (
    <NavigationContainer>


      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LanguageAsk" component={LanguageAsk} />
        <Stack.Screen name="GenderAskEnglish" component={GenderAskEnglish} />
        <Stack.Screen name="GenderAskHindi" component={GenderAskHindi} />
        <Stack.Screen name="MainFormEnglish" component={MainFormEnglish} />
        <Stack.Screen name="MainFormHindi" component={MainFormHindi} />
        <Stack.Screen name="HomeViewEnglish" component={HomeViewEnglish} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
