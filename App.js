// App.js 
import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Home';
import ProductDetailScreen from './src/screens/ProductDetail';
import CheckoutScreen from './src/screens/Checkout';

const Stack = createStackNavigator();


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  const handleLogout = (navigation) => {
    // Add your logout logic here (e.g., clearing tokens, navigation to login)
    Alert.alert('Logged Out', 'You have been logged out.');
    setIsAuthenticated(false)
    navigation.navigate('Login')
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignupScreen}
              options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen}
              options={({ navigation }) => ({
                title: 'Home',
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => handleLogout(navigation)}
                  >
                    <Text style={styles.logoutText}>Logout</Text>
                  </TouchableOpacity>
                ),
              })} />

            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
              options={{ headerShown: true, title: 'Product Details' }} // Show header for Product Detail
            />

            <Stack.Screen
              name="Checkout"
              component={CheckoutScreen}
              options={{ headerShown: true, title: 'Checkout Details' }}
            />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderColor: '#007BFF',
    borderWidth: 2,
  },
  logoutButton: {
    marginRight: 10,  // Space from right edge
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;