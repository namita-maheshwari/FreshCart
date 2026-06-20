import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from 'react-native';


const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems } = route.params; // Assuming items from cart are passed through navigation

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  // List of payment methods
  const paymentMethods = ['Cash on Delivery', 'Credit Card', 'Debit Card', 'UPI'];

  // Function to handle the checkout button press
  const handleCheckout = () => {
    if (name && address && selectedPayment) {
      Alert.alert('Checkout Successful', `Your order has been placed!\n\nName: ${name}\nAddress: ${address}\nPayment Method: ${selectedPayment}`);
      navigation.navigate('Home')
      // Perform additional logic here (like sending order data to API)
    } else {
      Alert.alert('Error', 'Please fill all the fields and select a payment method.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Name and Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Name and Address</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter your address"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          multiline
        />
      </View>

      {/* Selected Items Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Selected Items</Text>
        <FlatList
          data={cartItems} // Assuming cartItems is an array of product objects
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text>{item.name}</Text>
              <Text>₹{item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* Payment Method Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Payment Method</Text>
        {paymentMethods.map((method, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paymentOption, selectedPayment === method && styles.selectedPaymentOption]}
            onPress={() => setSelectedPayment(method)}
          >
            <Text style={styles.paymentText}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Checkout Button */}
      <Button title="Checkout" onPress={handleCheckout} color="#14716C" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 5,
    borderRadius: 5,
  },
  paymentOption: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 10,
  },
  selectedPaymentOption: {
    borderColor: '#14716C',
    borderWidth: 2,
  },
  paymentText: {
    fontSize: 16,
  },
});

export default CheckoutScreen;