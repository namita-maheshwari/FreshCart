import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Alert, Button } from 'react-native';
import MyButton from '../CustomComponents/MyButton';
import MyTextInput from '../CustomComponents/MyTextInput';
import { loginUser } from '../database/db';

const LoginScreen = ({ setIsAuthenticated, navigation }) => {
    const [inputs, setInputs] = useState({
        phoneOrEmail: '',
        password: '',
    });

    const handleChange = (key, value) => {
        setInputs({
            ...inputs,
            [key]: value,
        });
    };

    //   // Configuration for username and password fields
    const inputFields = [
        { label: 'Phone/Email ID', placeholder: 'Enter your phone/emailId', key: 'phoneOrEmail' },
        { label: 'Password', placeholder: 'Enter your password', key: 'password', secureTextEntry: true },
    ];

    const handleLoginPress = () => {
        const { phoneOrEmail, password } = inputs;

        if (phoneOrEmail && password) {
            setIsAuthenticated(true);  // Set the authentication state to true on successful login
            Alert.alert('Login Successful', `Welcome, ${phoneOrEmail}!`);
        } else {
            Alert.alert('Error', 'Please enter both username and password');
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');  // Navigate back to Login after signup
    };

    const openHomaPage = () => {
        navigation.navigate('Home');  // Navigate back to Login after signup
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
                    secureTextEntry={input.secureTextEntry || false}
                />
            ))}

            <MyButton title="Login" onPress={handleLoginPress} backgroundColor="#14716C" textColor="#FFFFFF" style={styles.button} />
            <Button title='New Here? SignUp' color={'#14716C'} onPress={handleSignUp} />
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

export default LoginScreen;
