import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/HomeScreen/Home';
import Profile from './src/screens/AccountScreen/Profile';
import Category from './src/screens/CategoryScreen/Category';

const Tab = createBottomTabNavigator();
const AccountStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="HomeScreen"
                component={Home}
                options={{headerShown: false}}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Category">
          {() => (
            <CategoryStack.Navigator>
              <CategoryStack.Screen
                name="CategoryScreen"
                component={Category}
                options={{headerShown: false}}
              />
            </CategoryStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Account">
          {() => (
            <AccountStack.Navigator>
              <AccountStack.Screen
                name="AccountScreen"
                component={Profile}
                options={{headerShown: false}}
              />
            </AccountStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
