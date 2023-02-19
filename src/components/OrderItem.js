import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// cuando escribimos una funcion fuera del componente, esta se ejecuta una vez, de lo contrario, se ejecutaria cada vez que se renderiza el componenete
const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>total</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete()}>
          <Ionicons name="md-trash" color={"red"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
  },
});
