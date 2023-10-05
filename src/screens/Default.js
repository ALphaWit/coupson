import React from 'react';
import {Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Default = ({route, navigation}) => {
  const {data} = route.params 
  // const navigation = useNavigation()
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"black"
      }}>
      <Text
      style={{
        color:'white'
      }}
      >{data}</Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
          console.log(route.params)
          navigation.navigate("Home")
          // navigation.goBack()
          // navigation.pop(2)
          // navigation.popToTop() //ALL VALUES FROM STACK WILL BE CLEARED AND YOU WILL BE POPPED TO THE TOP
        }}
        title="Press Me"
      />
    </View>
  );
};
export default Default;