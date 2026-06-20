

# Fresh Cart - A Modern eCommerce App for Groceries

## Basic Idea About the App

**Fresh Cart** is a React Native-based e-commerce mobile application designed for ordering groceries. The app allows users to browse grocery items, view detailed product information, and dummy fucntionality to add items to their cart. It includes user authentication features (Login/Signup/Logout) and a checkout dummy screen where users can place orders by providing details such as their name, address, and preferred payment method.

### Test cases have been added in "**test**" folder

## Features

- User Authentication (Login/Signup)
- Product Listing (Grid View)
- Product Details Page
- Add to Cart Button - A dummy functionality
- Checkout page (With dummy User Information, Selected Items, Payment)
- Logout button in the navigation bar
- SQLite integration for storing data locally
- React Navigation for seamless navigation across screens


## Screens

1. **Login Screen**  
   - Allows users to log in using their email or phone number and password.

2. **Signup Screen**  
   - Allows new users to create an account by providing their full name, email, phone number, and password.

3. **Home Screen**  
   - Displays two sections:
     1. **Offers/Order Status**
     2. **Products List** (in a grid layout)
   
4. **Product Details Screen**  
   - Shows detailed information about a selected product with an option to add it to the cart.

5. **Checkout Screen**  
   - Displays user information (name and address), selected items, and payment options.

## Screenshots
*Include screenshots of the app screens here (e.g., Login, SignUp, Home, Product Detail, and CheckOut).*

## Libraries and Frameworks
The app is built using the following libraries and frameworks:
- **React**: Version 18.2.0
- **React Native**: Version 0.74.5
- **SQLite Storage**: React Native SQLite Storage (v6.0.1) for saving and retrieving conversion history.
- **Node**: Version 22.5.1

### Dependencies:
```json
{
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "@testing-library/react-native": "^12.7.2",
    "react": "18.2.0",
    "react-native": "0.74.6",
    "react-native-gesture-handler": "^2.20.0",
    "react-native-safe-area-context": "^4.11.0",
    "react-native-screens": "^3.34.0",
    "react-native-sqlite-storage": "^6.0.1"
}
```

## How to Run the App

1. Clone the repository or download the project folder.
2. Open the terminal in the project folder and run the following command to install the dependencies:
   ```
   npm install
   ```
3. Link the SQLite storage library by running:
   ```
   npx react-native link react-native-sqlite-storage
   ```
4. Start the development server:
   ```
   npx react-native run-android   // for Android
   npx react-native run-ios       // for iOS
   ```

5. The app will launch in the simulator or on the connected device.

Enjoy using the Currency Converter app!
