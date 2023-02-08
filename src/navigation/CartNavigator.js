import { StyleSheet} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
      <Stack.Navigator
        initialRouterName="Categories"
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Carrito",
          }}
        />
        
      </Stack.Navigator>

  );
};

export default CartNavigator;

const styles = StyleSheet.create({});
