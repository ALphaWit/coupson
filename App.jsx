import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
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
      >Buy my coupon! and so on.</Text>
    </View>
  );
};
export default App;