import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Product data
const products = [
  { id: '1', name: 'Bananas', price: '₹50.00/kg', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Apples', price: '₹200.00/kg', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Oranges', price: '₹100.50/kg', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Milk', price: '₹60.00/lt.', image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'Eggs', price: '₹2.50/piece', image: 'https://via.placeholder.com/100' },
  { id: '6', name: 'Bread', price: '₹50.00', image: 'https://via.placeholder.com/100' },
];

// Component for rendering Grid-style Product List
const ProductList = () => {
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('ProductDetail', { product: item })} // Navigate to product detail page
    >
      <View style={styles.productCard}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => Alert.alert('(Dummy) \nItem added to Cart.')}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  //Items in Cart: {cartItems.length}
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productListContainer}
        numColumns={2} // Display products in grid layout
      />
    </View>
  );

};

// Styles for the entire screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  productContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  // Product list styles
  productListContainer: {
    paddingVertical: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#14716C',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartCount: {
    fontWeight: 'bold',
  }
});

export default ProductList;