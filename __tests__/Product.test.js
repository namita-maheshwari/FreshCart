import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../src/Components/Product';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

describe('Product Component', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<ProductList />);
        expect(toJSON()).toMatchSnapshot(); // Create a snapshot of the rendered component
    });
});

