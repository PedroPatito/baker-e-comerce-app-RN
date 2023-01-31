import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
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