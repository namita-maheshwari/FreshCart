
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyButton = ({ title, onPress, backgroundColor, textColor, style }) => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor || '#007BFF' }, style]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor || '#FFFFFF' }]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      width: 300,
      height:50
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default MyButton;