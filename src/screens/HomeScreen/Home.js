import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TopSearchComponent from './Components/TopSearchComponent/TopSearchComponent'
import OffersList from './Components/OffersList/OffersList'
import HomeShopList from './Components/HomeShopList/HomeShopList';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    
    <View
      style={styles.container}>
        <TopSearchComponent/>
        <OffersList/>
        <ScrollView>
        <HomeShopList/>
        </ScrollView>
        

       
        
    </View>
   
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
  },
  upperFront:{
    marginTop:"60%",
    backgroundColor:"black",
    height:'30%',
  },
  LowerFront:{
    marginTop:"40%",
    backgroundColor:"black",
    height:'60%',
  },
  backText:{
    fontFamily:'SFPRODISPLAYBOLD',
    color: 'white',
  }
});
