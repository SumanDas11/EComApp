import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';
import colors from '../styles/colors';

const ProductInfoScreen = () => {
    const route = useRoute();
    const width = Dimensions.get("window").width;
    const height = width;
    const [addedToCart, setAddedToCart] = useState(false);
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        setAddedToCart(true);
        dispatch(addToCart(item))
        setTimeout(() => {
            setAddedToCart(false)
        }, 60000)
    }
    const cart = useSelector((state) => state.cart.cart);
    // console.log("from ProductInfoScreen.js ", cart)
    return (
        <SafeAreaView style={{
            paddingTop: Platform.OS === "android" ? 40 : 0,
            flex: 1,
            backgroundColor: "#FFF",
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Search bar */}
                <View style={{ flexDirection: 'row', backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, flexDirection: 'row', backgroundColor: "#FFF", marginLeft: 10, padding: 5, gap: 5, borderRadius: 3 }}>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput placeholder='Search Amazon.in' />
                    </Pressable>
                    <Ionicons name="mic" size={24} color="black" style={{ marginRight: 5 }} />
                </View>

                {/* product image carousel */}
                <ScrollView horizontal={true} pagingEnabled={true}>
                    {
                        route.params.carouselImages.map((item, index) => ( //how the exact images are picked?
                            <ImageBackground key={index}
                                source={{ uri: item }}
                                style={{ height, width, marginTop: 25 }}
                            >

                                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {/* discount percentage */}
                                    <View style={{ backgroundColor: 'red', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>20% off</Text>
                                    </View>

                                    {/* share icon */}
                                    <View style={{ backgroundColor: '#CCC', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                        <MaterialIcons name="share" size={24} color="black" />
                                    </View>
                                </View>

                                {/* heart icon */}
                                <View style={{ backgroundColor: '#CCC', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginLeft: 10, marginBottom: 10 }}>
                                    <AntDesign name="hearto" size={24} color="black" />
                                </View>
                            </ImageBackground>
                        ))
                    }
                </ScrollView>
                {/* product title */}
                <View style={{ margin: 10 }}>
                    <Text>
                        {route.params.title}
                    </Text>
                </View>
                {/* product price */}
                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                    ₹ {route.params.price}
                </Text>
                <Text style={{ borderWidth: 1, height: 1, borderColor: '#DDD', marginTop: 10 }} />
                {/* Color and size display */}
                <View>
                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Color: {route.params.color}</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>Size: {route.params.size}</Text>
                </View>
                <Text style={{ borderWidth: 1, height: 1, borderColor: '#DDD', marginTop: 10 }} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Total: ₹ {route.params.price}
                    </Text>
                    <Text style={{ marginTop: 5, color: 'blue' }}>Free delivery Tomorrow by 3 PM. Order within 10 hrs 30 mins</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                        <Ionicons name="location" size={24} color="black" />
                        <Text>Deliver to NAME - ADDRESS</Text>
                    </View>
                    <Text style={{ color: 'green', marginTop: 10 }}>In stock</Text>
                </View>
                {/* add to cart button */}
                <Pressable
                    onPress={() => addItemToCart(route.params.item)}
                    style={{ backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', marginHorizontal: 40, paddingVertical: 10, borderRadius: 20 }}
                >
                    {
                        addedToCart ? (
                            <Text style={{ fontWeight: 'bold' }}> Added to Cart</Text>
                        ) : (
                            <Text style={{ fontWeight: 'bold' }}> Add to Cart</Text>
                        )
                    }
                </Pressable>
                {/* buy now button */}
                <Pressable
                    onPress={() => {
                        navigation.navigate("Cart")
                    }}
                    style={{ marginTop: 10, backgroundColor: colors.themeColor, justifyContent: 'center', alignItems: 'center', marginHorizontal: 40, paddingVertical: 10, borderRadius: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}> Buy Now</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})