import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Orders } from "../data/Orders";
import OrderItem from "../components/OrderItem";

const OrdersScreen = () => {
  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={() => console.log("onDelete")} />
  );
  return (
    <FlatList
      data={Orders}
      keyExtractor={(item) => item.id}
      renderItem={renderOrderItem}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
