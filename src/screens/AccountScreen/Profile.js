import {StyleSheet, Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        Account Screen
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('CategoryScreen');
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
