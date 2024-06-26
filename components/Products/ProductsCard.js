import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
  };

  const handleAddToCart = () => {
    alert("Added to cart");
  };
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cardTitle}>{p.name}</Text>
        <Text style={styles.cardDescription}>
          {p.description.substring(0, 30)} ..more
        </Text>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 10,
    textAlign: "left",
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 70,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 70,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 9,
    fontWeight: "bold",
  },
});
export default ProductsCard;
