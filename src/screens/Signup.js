import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Image, ScrollView, Button } from 'react-native';
import MyTextInput from '../CustomComponents/MyTextInput';
import MyButton from '../CustomComponents/MyButton';
import { openDatabase, createTable, signupUser } from '../database/db'; // Import your database functions

const SignupScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  // Initialize database and create table
  useEffect(() => {
    openDatabase().then(() => {
      createTable();
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const handleChange = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  //Input fields configuration
  const inputFields = [
    { label: 'Full Name', placeholder: 'Enter your full Name', key: 'fullName' },
    { label: 'Email', placeholder: 'Enter your email', key: 'email', keyboardType: 'email-address' },
    { label: 'Phone Number', placeholder: 'Enter your phone number', key: 'phoneNumber', keyboardType: 'numeric' },
    { label: 'Password', placeholder: 'Enter your password', key: 'password', secureTextEntry: true },
  ];

  const handleSignUpPress = () => {
    const { fullName, email, phoneNumber, password } = inputs;

    if (fullName && email && phoneNumber && password) {
      signupUser(fullName, email, phoneNumber, password)
        .then(() => {
          Alert.alert('Signup Successful', 'You can now login.');
          navigation.navigate('Login');  // Navigate to login screen after successful signup
        })
        .catch(error => {
          Alert.alert('Error', error);
        });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };


  const handleLogin = () => {
    navigation.navigate('Login');  // Navigate back to Login after signup
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/login-image.png')} style={styles.image} />

      {inputFields.map((input, index) => (
        <MyTextInput
          key={index}
          label={input.label}
          value={inputs[input.key]}
          onChangeText={(text) => handleChange(input.key, text)}
          placeholder={input.placeholder}
          keyboardType={input.keyboardType || 'default'}
          secureTextEntry={input.secureTextEntry || false}
        />
      ))}

      <MyButton title="SignUp" onPress={handleSignUpPress} backgroundColor="#14716C" textColor="#FFFFFF" style={styles.button} />
      <Button title='Already Have Account? Login' color={'#14716C'} onPress={handleLogin} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    width: 400,
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 30,
  },
  button: {
    width: '85%',
    marginTop: 20,
  },
});

export default SignupScreen;