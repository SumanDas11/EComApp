// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Info, YourAddresses, EnterNewAddress, Confirm } from '../screens'; //screens/index.js
// import RegisterScreen from '../screens/RegisterScreen';
// import HomeScreen from '../screens/HomeScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ProfileScreen from '../screens/ProfileScreen';
// import CartScreen from '../screens/CartScreen';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import ProductInfoScreen from '../screens/ProductInfoScreen';
// import YourAddressesScreen from '../screens/YourAddressesScreen';
// import EnterNewAddressScreen from '../screens/EnterNewAddressScreen';
// import ConfirmationScreen from '../screens/ConfirmationScreen';
import navigationStrings from '../constants/navigationStrings';
import BottomTabs from './BottomTabs';
// import BottomTabs from './BottomTabs';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    // const Tab = createBottomTabNavigator();
    // function BottomTabs() {
    //     return (
    //         <Tab.Navigator>
    //             <Tab.Screen name={navigationStrings.HOME} component={HomeScreen}
    //                 options={{
    //                     headerShown: false,
    //                     tabBarShowLabel: false,
    //                     tabBarIcon: ({ focused }) => focused ? (<MaterialIcons name="home" size={24} color="#008E97" />) : (<AntDesign name="home" size={24} color="gray" />)
    //                 }} />
    //             <Tab.Screen name={navigationStrings.PROFILE} component={ProfileScreen}
    //                 options={{
    //                     headerShown: false,
    //                     tabBarShowLabel: false,
    //                     tabBarIcon: ({ focused }) => focused ? (<MaterialIcons name="person" size={24} color="#008E97" />) : (<MaterialIcons name="person-outline" size={24} color="gray" />)
    //                 }} />
    //             <Tab.Screen name={navigationStrings.CART} component={CartScreen}
    //                 options={{
    //                     headerShown: false,
    //                     tabBarShowLabel: false,
    //                     tabBarIcon: ({ focused }) => focused ? (<Ionicons name="cart" size={24} color="#008E97" />) : (<Ionicons name="cart-outline" size={24} color="gray" />)
    //                 }} />
    //         </Tab.Navigator>
    //     )
    // }
    return (
        // <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='Info' component={ProductInfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name='YourAddresses' component={YourAddressesScreen} options={{ headerShown: false }} />
                <Stack.Screen name='EnterNewAddress' component={EnterNewAddressScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Confirm' component={ConfirmationScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.MAIN} component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.INFO} component={Info} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.YOUR_ADDRESSES} component={YourAddresses} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.ENTER_NEW_ADDRESS} component={EnterNewAddress} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.CONFIRM} component={Confirm} options={{ headerShown: false }} />
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default StackNavigator