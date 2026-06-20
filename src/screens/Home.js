
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProductList from '../Components/Product';
import OfferSection from '../Components/Offer';
import { useNavigation } from '@react-navigation/native';

// Main Groceries Home Screen component
const HomeScreen = () => {
  // const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();

  const cartItems = [
    { id: '1', name: 'Bananas', price: '₹50.00/kg', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Apples', price: '₹200.00/kg', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Oranges', price: '₹100.50/kg', image: 'https://via.placeholder.com/100' }
  ]
  const handleCheckout = ({ }) => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigation.navigate('Checkout', { cartItems });
    }
  };

  return (
    <View style={styles.container}>
      {/* Offer and Order Status Section */}
      <Text style={styles.sectionTitle}>Offers & Order Status</Text>
      <OfferSection />

      {/* Product List Section */}
      <Text style={styles.sectionTitle}>Product List</Text>
      <ProductList />
      <View style={styles.checkoutView}>
        <Button title="Go to Checkout" onPress={handleCheckout} color='#fff' />
      </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkoutView: {
    backgroundColor: 'green',
    margin: -10,
    height: 50, padding: 3
  },
});

export default HomeScreen;