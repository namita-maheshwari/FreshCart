import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../src/screens/Home';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

describe('HomeScreen Component', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<HomeScreen />);
        expect(toJSON()).toMatchSnapshot(); // Create a snapshot of the rendered component
    });

    it('renders correctly with initial state', () => {
        const { getByText } = render(<HomeScreen />);
        expect(getByText('Offers & Order Status')).toBeTruthy();
        expect(getByText('Product List')).toBeTruthy();
    });
});

