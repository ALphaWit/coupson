import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View
      style={styles.container}>
      <Text
        style={{
          color: 'black',
        }}>
        HOME ----- Buy my coupon! and so, with Redux update za
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('AccountScreen');
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    backgroundColor:"orange",
    height:400
  }
});
