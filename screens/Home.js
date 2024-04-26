import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "../components/Layout/Layout";
import Categories from "../category/Categories";
import Product from "../components/Products/Product";
// import Categories from "../components/category/Categories";
// import Banner from "../components/Banner/Banner";
// import Products from "../components/Products/Products";
// import Header from "../components/Layout/Header";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserData } from "../redux/features/auth/userActions";

const Home = () => {
  return (
    <Layout>
      <Categories />
      <Product />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
