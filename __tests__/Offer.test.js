import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import OfferSection from '../src/Components/Offer';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Offer Component', () => {
    it('renders correctly', () => {
      const { toJSON } = render(<OfferSection />);
      expect(toJSON()).toMatchSnapshot(); // Create a snapshot of the rendered component
    });
  });