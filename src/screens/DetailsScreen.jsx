import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'

const DetailsScreen = ({navigation, route}) => {

    useEffect(() => {
      console.log(route.params);
    }, [])
    
  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <View style={styles.buttonContainer} >
      <Button title="Go to categories" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    margin: 10,
    backgroundColor: "white",
  }
})