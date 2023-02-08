import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Cart } from '../data/cart'
import CartItem from '../components/CartItem'

const CartScreen = () => {
    const total = 120;

    const renderCartItem = ({item}) =>(
        <CartItem item={item} onDelete={() =>console.log("borrar elemento")} />
    )

    const handleConfirmCart =() =>{
        console.log("confirmar");
    }

    const handleDeleteItem =() =>{
        console.log("borrar elemento");
    }

  return (
    <View style={styles.container}>
        <View style={styles.list}>
        <FlatList
            data={Cart}
            keyExtractor={(item)=>item.id}
            renderItem={renderCartItem}
        />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart} >
                <Text>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.text}>Total </Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        paddingBottom: 120,
        backgroundColor: "white"
    },
    list:{
        flex: 1,
    },
    footer:{
        padding: 12,
        borderTopColor: "#ccc",
        borderBottomWidth: 1,
    },
    confirm:{
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    total:{
        flexDirection: "row",
    },
    text:{
        fontSize:18,

    }
})