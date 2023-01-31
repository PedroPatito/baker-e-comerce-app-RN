import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { COLORS } from '../constants/colors'
const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Categories" screenOptions={{
        headerStyle: {backgroundColor: COLORS.primary},
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{
          title: "Mi panaderia"
        }}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={({route}) =>({
          title: route.params.title,
        })} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})