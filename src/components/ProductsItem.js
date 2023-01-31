import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductsItem = ({item}) => {
  return (
    <View style={styles.itemContainer} >
        <View style={styles.imageContainer} >
            <Image style={styles.image} source={{
            uri: "https://bonton.ca/app/uploads/2020/04/Light-Rye-Bread-2-of-10-1203x800.jpg"
        }}/>
        </View>
        <View style={styles.textContainer}>
            <Text>{item.name}</Text>
            <Text>{item.descripcion}</Text>
            <Text>${item.price}</Text>
        </View>
    </View>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
    itemContainer:{
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        margin: 10,
    },
    imageContainer:{
        height: "60%",

    },
    textContainer:{
        height: "40%"
    },
    image:{
        height: "100%",
        width: "100%"

    }      
})