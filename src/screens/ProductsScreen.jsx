import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ProductsItem from '../components/ProductsItem'
import { Products } from '../data/products'
const ProductsScreen = ({navigation, route}) => {

  const newProducts = Products.filter(product => product.category === route.params.categoryId)

  const handleSelectedProduct = (item) =>{
    navigation.navigate("Details", {
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
      <FlatList
      data={newProducts}
      renderItem={renderProductsItem}
      keyExtractor={item => item.id}
      numColumns={2}
      />
    
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
    width: 150,
  }
})