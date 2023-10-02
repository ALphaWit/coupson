import React from 'react';
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/screens/Home'
import Default from './src/screens/Default'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"Coupson"
        }}
        />
         <Stack.Screen
        name='Default'
        component={Default}
        options={{
          title:"Default check screen"
        }}
        />

      </Stack.Navigator>

    </NavigationContainer>
    // <View>
    //   <Text>Buy my coupon! and so, with Redux update</Text>

    //   <Button
    //     onPress={() => {
    //       console.log('You tapped the button!');
    //     }}
    //     title="Press Me"
    //   />
    // </View>
  );
};
export default App;