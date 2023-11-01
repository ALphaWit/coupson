import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const OffersList = ({ navigation }) => {
  return (
    <View
        // style={styles.container}
        >
        <Text
            style={styles.backText}>
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
  )
}

export default OffersList;

const styles = StyleSheet.create({
      container:{
        backgroundColor:"orange",
        
        height:"40%",
        marginTop:"20%"
      },
      backText:{
        fontFamily:'SFPRODISPLAYBOLD',
        color: 'black',
      }
})