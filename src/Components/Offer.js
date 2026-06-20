//Offer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const offers = [
  { id: '1', title: '20% Off on First Order', description: 'Use code: FIRST20' },
  { id: '2', title: 'Order Delivered', description: 'Your order #12345 was delivered' },
];


// Component for rendering Offers/Order Status section
const OfferSection = () => {
  return (
    <View style={styles.offerContainer}>
      {offers.map((offer, index) => (
        <View key={offer.id} style={styles.offerCard}>
          <Text style={styles.offerTitle}>{offer.title}</Text>
          <Text style={styles.offerDescription}>{offer.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    // Offer section styles
    offerContainer: {
      marginBottom: 20,
    },
    offerCard: {
      backgroundColor: '#E0F7FA',
      padding: 15,
      borderRadius: 8,
      marginVertical: 5,
    },
    offerTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#00796B',
    },
    offerDescription: {
      fontSize: 14,
      color: '#004D40',
      marginTop: 5,
    },

});
export default OfferSection;