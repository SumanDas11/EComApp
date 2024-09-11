import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import jwt_decode from "jwt_decode";
// import { UserType } from '../UserContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../UserContext';
import colors from '../styles/colors';

const EnterNewAddressScreen = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");

    // const { userId, setUserId } = useContext(UserType)
    // const { user } = useContext(UserContext);
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const token = await AsyncStorage.getItem("authToken");
    //         // const decodedToken = jwt_decode(token);

    //         // const userId = decodedToken.userId;
    //         setUserId(userId);
    //     }
    //     fetchUser();
    // }, [])
    // console.log("user from EnterNewAddressScreen: ", user);

    const navigation = useNavigation();
    const handleAddAddress = () => {
        navigation.navigate("YourAddresses");
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 50, backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Add a new Address</Text>
                <View style={{ marginHorizontal: 10, }}>
                    <TextInput
                        placeholder='India'
                        placeholderTextColor={"black"}
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Full Name(First and last name)</Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder='Enter your name'
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Mobile Number</Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholder='Mobile no'
                        placeholderTextColor={"gray"}
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Flat, House Number, Building, Company</Text>
                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Area, Street, Sector, Village</Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Landmark</Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholder='Eg. Near Apollo hospital'
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Pincode</Text>
                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholder='Enter Pincode'
                        style={{ borderWidth: 1, padding: 10, borderColor: '#BBB', borderRadius: 5 }}
                    />

                    {/* Button */}
                    <Pressable
                        onPress={handleAddAddress}
                        style={{ backgroundColor: colors.themeColor, borderRadius: 20, marginTop: 20 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#FFF', padding: 10 }}
                        >
                            Add Address
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default EnterNewAddressScreen

const styles = StyleSheet.create({})