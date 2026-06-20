// ProductDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../CustomComponents/MyButton.js';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params; // Retrieve product details passed from the previous screen

  const handleAddToCart = () => {
    alert(`${product.name} has been added to your cart!`);
  };
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}> Amazing Quality Product </Text>
      <MyButton title="Add to Cart" onPress={handleAddToCart}  
      backgroundColor="#14716C" textColor="#FFFFFF" style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'green'
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    width: '100%',
    marginTop:300
},
});

export default ProductDetailScreen;
