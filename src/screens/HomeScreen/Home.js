import {StyleSheet, Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        HOME -----> Buy my coupon! and so, with Redux update za
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('AccountScreen', {data: 'data from props'});
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
