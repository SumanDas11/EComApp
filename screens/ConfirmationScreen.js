import { Alert, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart } from '../redux/CartReducer';

const ConfirmationScreen = () => {
    const steps = [
        { title: "Address", content: "Address Form" },
        { title: "Delivery", content: "Delivery Options" },
        { title: "Payment", content: "Payment Details" },
        { title: "Place Order", content: "Order Summary" },
    ];
    const [currentStep, setCurrentStep] = useState(0);
    const [deliveryOptionSelected, stetDeliveryOptionSelected] = useState(false);
    const [paymentOptionSelected, setPaymentOptionSelected] = useState("");
    const navigation = useNavigation();

    const cart = useSelector((state) => state.cart.cart);
    const total = cart?.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
    const dispatch = useDispatch();
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Steps progress bar */}
                <View style={{ flexDirection: 'row' }}>
                    {
                        steps.map((step, index) => (
                            <View key={index}
                                style={{
                                    width: '25%', alignItems: 'center', justifyContent: 'center',
                                    borderWidth: 1, borderColor: '#FFF', padding: 10,
                                    backgroundColor: (index == currentStep) ? ('yellow') : (index < currentStep) ? ('green') : ('#CCC')
                                }}>
                                <Text>{step.title}</Text>
                            </View>
                        ))
                    }
                </View>

                {/* current step view */}
                {
                    (currentStep == 0) && (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Select delivery address</Text>

                            {/* address card */}
                            <View style={{ borderWidth: 1, margin: 10, padding: 5, borderColor: '#AAA', rowGap: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Suman Das</Text>
                                    <Ionicons name="location-outline" size={24} color="red" />
                                </View>
                                <Text>#01, Near India Gate</Text>
                                <Text>New Delhi</Text>
                                <Text>India, Delhi</Text>
                                <Text>Phone number: 9876543210</Text>
                                <Text>PIN code: 100001</Text>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <Pressable
                                        onPress={() => setCurrentStep(1)}
                                        style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                        <Text>Select</Text>
                                    </Pressable>
                                    <Pressable style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                        <Text>Edit</Text>
                                    </Pressable>
                                    <Pressable style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                        <Text>Set as default</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    )
                }
                {
                    (currentStep == 1 && (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Choose your delivery option</Text>
                            {/* delivery options */}
                            <Pressable
                                onPress={() => stetDeliveryOptionSelected(!deliveryOptionSelected)}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, borderColor: '#BBB', padding: 5 }}
                            >
                                {deliveryOptionSelected ? (
                                    <MaterialIcons name="radio-button-on" size={24} color="black" />
                                ) : (
                                    <MaterialIcons name="radio-button-off" size={24} color="black" />
                                )}
                                <Text>
                                    <Text style={{ color: 'green' }}>Tomorrow by 10 pm </Text>
                                    - FREE delivery
                                </Text>
                            </Pressable>
                            {/* Button */}
                            <Pressable
                                onPress={() => deliveryOptionSelected && setCurrentStep(2)}
                                style={{ backgroundColor: 'orange', alignItems: 'center', padding: 10, justifyContent: 'center', borderRadius: 10, margin: 20 }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Continue</Text>
                            </Pressable>
                        </View>
                    ))
                }
                {
                    currentStep == 2 && (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Select your payment method</Text>
                            {/* payment options */}
                            <Pressable
                                onPress={() => setPaymentOptionSelected("cash")}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, borderColor: '#BBB', padding: 5 }}
                            >
                                {paymentOptionSelected == "cash" ? (
                                    <MaterialIcons name="radio-button-on" size={24} color="black" />
                                ) : (
                                    <MaterialIcons name="radio-button-off" size={24} color="black" />
                                )}
                                <Text>Cash on delivery</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => setPaymentOptionSelected("nonCash")}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, borderColor: '#BBB', padding: 5, marginTop: 10 }}
                            >
                                {paymentOptionSelected == "nonCash" ? (
                                    <MaterialIcons name="radio-button-on" size={24} color="black" />
                                ) : (
                                    <MaterialIcons name="radio-button-off" size={24} color="black" />
                                )}
                                <Text>UPI/ Credit or debit card</Text>
                            </Pressable>
                            {/* Button */}
                            <Pressable
                                onPress={() => (paymentOptionSelected != "") && setCurrentStep(3)}
                                style={{ backgroundColor: 'orange', alignItems: 'center', padding: 10, justifyContent: 'center', borderRadius: 10, margin: 20 }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Continue</Text>
                            </Pressable>
                        </View>
                    )
                }
                {
                    currentStep == 3 && paymentOptionSelected == "nonCash" && (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Razorpay gateway page</Text>
                            <Pressable
                                onPress={() => {
                                    Alert.alert("To implement", "Razorpay gateway");
                                    dispatch(cleanCart());
                                    navigation.navigate("Home");
                                }
                                }
                                style={{ backgroundColor: 'orange', alignItems: 'center', padding: 10, justifyContent: 'center', borderRadius: 10, margin: 20 }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Place your order</Text>
                            </Pressable>
                        </View>
                    )
                }

                {
                    currentStep == 3 && paymentOptionSelected == "cash" && (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Order now</Text>
                            {/* Shipping to section */}
                            <View
                                style={{ borderWidth: 1, rowGap: 10, borderColor: '#BBB', padding: 5, margin: 10, backgroundColor: '#FFF' }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}
                                >Shipping to Suman Das</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#AAA' }}>Items</Text>
                                    <Text style={{ color: '#AAA' }}>₹ {total}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#AAA' }}>Delivery charge</Text>
                                    <Text style={{ color: '#AAA' }} >₹ 0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order Total</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>₹ {total}</Text>
                                </View>
                            </View>
                            {/* Pay with section */}
                            <View
                                style={{ borderWidth: 1, rowGap: 10, borderColor: '#BBB', padding: 5, margin: 10, backgroundColor: '#FFF' }}
                            >
                                <Text>Pay with</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Pay on delivery(Cash)</Text>
                            </View>
                            {/* Button */}
                            <Pressable
                                onPress={() => {
                                    Alert.alert("Order placed");
                                    dispatch(cleanCart());
                                    navigation.navigate("Home");
                                }
                                }
                                style={{ backgroundColor: 'orange', alignItems: 'center', padding: 10, justifyContent: 'center', borderRadius: 10, margin: 20 }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Place your order</Text>
                            </Pressable>
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView >
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})