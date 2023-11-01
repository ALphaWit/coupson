import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeShopList = ({ navigation }) => {
  return (
    <View
        // style={styles.shopContainer}
        >
        <Text
            style={styles.backText}>
            HOME ----- Buy my coupon! and so, with Redux update zsa
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

export default HomeShopList;

const styles = StyleSheet.create({
    shopContainer:{
        marginTop:"10%",
        backgroundColor:"white",
        
      },
      backText:{
        fontFamily:'SFPRODISPLAYBOLD',
        color: 'black',
      }
})