import { View, Text } from "react-native";
import React from "react";
import { ProductData } from "../../data/ProductsData";
import ProductsCard from "./ProductsCard";
const Product = () => {
  return (
    <View>
      {ProductData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Product;
