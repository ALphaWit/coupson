import React from 'react';
import {Text, View, Button} from 'react-native';
import BottomTab from './src/components/bottomTab'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home'
import Default from './src/screens/Default'
import Profile from './src/screens/Profile'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Default" component={Default} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}
// const NewStack = createNativeStackNavigator();

// function NewStackScreen() {
//   return (
//     <NewStack.Navigator>
//       <NewStack.Screen name="Profile" component={Profile}/>
//     </NewStack.Navigator>
//   );
// }



const BotTab = createBottomTabNavigator();

function BotTabStack(){
  return(
    <BotTab.Navigator>
      <BotTab.Screen name="HomeStack" component={HomeStackScreen} />
      <BotTab.Screen name="Profile" component={Profile} />
  </BotTab.Navigator>
  );
}

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'> */}
      {/* <Stack.Screen
          name="BotTab"
          component={BotTabStack}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
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
        /> */}
        <BotTabStack/>
      {/* </Stack.Navigator> */}

       {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Default" component={Default} />
    </Tab.Navigator> */}
      

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