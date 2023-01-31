import { StyleSheet, Text, View,Button, FlatList } from 'react-native'
import React from 'react'
import ProductsItem from '../components/ProductsItem'
import { Products } from '../data/products'
const ProductsScreen = ({navigation, route}) => {

  const handleSelectedProduct = (item) =>{
    navigation.navigate("Products", {
      categoryId: item.category,
      title: item.name,
      descripcion: item.descripcion,
      price: item.price,
    })
  }

  const renderProductsItem = ({item}) =>(
    <View style={styles.productsContainer}>
    <ProductsItem item={item} onSelected={handleSelectedProduct} />
    </View>
  )


  return (
    <View style={styles.container} >
      <FlatList
      data={Products}
      renderItem={renderProductsItem}
      keyExtractor={item => item.id}
      />
      </View>
    
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer:{
    flex: 1,
    height: 150,
    // width: 150,
  }
})