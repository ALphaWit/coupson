import { StyleSheet, Text, View, Button } from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"orange"
    }}>
    <Text
    style={{
      color:'white'
    }}
    >Buy my coupon! and so, with Redux update</Text>
    <Button
      onPress={() => {
        navigation.navigate("Default",{data:"data from props"})
        console.log('You tapped the button!');
      }}
      title="Press Me"
    />
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})