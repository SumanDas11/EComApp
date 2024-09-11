import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import navigationStrings from '../constants/navigationStrings';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Cart, Home, Profile } from '../screens';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name={navigationStrings.HOME} component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ? (<MaterialIcons name="home" size={24} color="#008E97" />) : (<AntDesign name="home" size={24} color="gray" />)
                }} />
            <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ? (<MaterialIcons name="person" size={24} color="#008E97" />) : (<MaterialIcons name="person-outline" size={24} color="gray" />)
                }} />
            <Tab.Screen name={navigationStrings.CART} component={Cart}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => focused ? (<Ionicons name="cart" size={24} color="#008E97" />) : (<Ionicons name="cart-outline" size={24} color="gray" />)
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabs