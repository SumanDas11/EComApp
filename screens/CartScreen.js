import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';

const CartScreen = () => {

    const cart = useSelector((state) => state.cart.cart);
    // console.log("cart contennts from CartScreen.js: ", cart);
    const total = cart?.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const increaseQuntity = (item) => {
        dispatch(incrementQuantity(item))
    }
    const decreaseQuantity = (item) => {
        dispatch(decrementQuantity(item))
    }
    const removeItem = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Search bar */}
                <View style={{ flexDirection: 'row', backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, flexDirection: 'row', backgroundColor: "#FFF", marginLeft: 10, padding: 5, gap: 5, borderRadius: 3 }}>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput placeholder='Search Amazon.in' />
                    </Pressable>
                    <Ionicons name="mic" size={24} color="black" style={{ marginRight: 5 }} />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text>Subtotal: </Text>
                    <Text style={{ fontWeight: 'bold' }}>{total}</Text>
                </View>
                <Text style={{ padding: 10 }}>EMI details available</Text>
                {/* button */}
                <Pressable
                    onPress={() => (cart.length > 0) && navigation.navigate('Confirm')}
                    style={{ backgroundColor: colors.themeColor, padding: 10, borderRadius: 10, margin: 20 }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Proceed to buy ({cart.length}) items</Text>
                </Pressable>
                <Text style={{ borderWidth: 1, borderColor: '#CCC', height: 1 }} />
                {/* list of items in cart */}
                <View style={{ backgroundColor: '#FFF' }}>
                    {
                        cart.map((item, index) => (
                            <View key={index}
                                style={{ borderBottomWidth: 1, borderBottomColor: '#BBB' }}>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <Image source={{ uri: item.image }}
                                        style={{ height: 140, width: 140, resizeMode: 'contain' }}
                                    />
                                    <View style={{ margin: 10, rowGap: 5 }}>
                                        <Text numberOfLines={3} style={{ width: 150 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>₹ {item.price}</Text>
                                        <Text style={{ color: 'green' }}>In Stock</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 10 }}>
                                    <Pressable
                                        onPress={() => decreaseQuantity(item)}
                                        style={{ backgroundColor: colors.blackOpacity20, padding: 5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                                    >
                                        <AntDesign name="delete" size={24} color="black" />
                                    </Pressable>
                                    <Text style={{ width: 30, textAlign: 'center' }}>{item.quantity}</Text>
                                    <Pressable
                                        onPress={() => increaseQuntity(item)}
                                        style={{ backgroundColor: colors.blackOpacity20, padding: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
                                    >
                                        <AntDesign name="plus" size={24} color="black" />
                                    </Pressable>
                                    <Pressable
                                        onPress={() => removeItem(item)}
                                        style={{ backgroundColor: colors.blackOpacity20, padding: 8, marginLeft: 20, borderRadius: 5 }}
                                    >
                                        <Text>Remove</Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <Pressable
                                        style={{ borderWidth: 1, borderColor: colors.borderColor, padding: 8, marginLeft: 10, borderRadius: 5 }}
                                    >
                                        <Text>Save for later</Text>
                                    </Pressable>
                                    <Pressable
                                        style={{ borderWidth: 1, borderColor: colors.borderColor, padding: 8, marginLeft: 10, borderRadius: 5 }}
                                    >
                                        <Text>View similar items</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})