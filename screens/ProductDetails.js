import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../data/ProductsData";

// const ProductDetails = ({ route }) => {
//   //   console.log(route);
//   const [pDetails, setPDetails] = useState({});

//   useEffect(() => {
//     const getProduct = ProductsData.find((p) => {
//       return p.id === params._id;
//     });
//     setPDetails(getProduct);
//   }, []);
//   console.log(route);

//

const ProductDetails = ({ route }) => {
  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
