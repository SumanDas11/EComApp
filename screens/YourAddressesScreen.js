import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const YourAddressesScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Search bar */}
                <View style={{ flexDirection: 'row', backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, flexDirection: 'row', backgroundColor: "#FFF", marginLeft: 10, padding: 5, gap: 5, borderRadius: 3 }}>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput placeholder='Search Amazon.in' />
                    </Pressable>
                    <Ionicons name="mic" size={24} color="black" style={{ marginRight: 5 }} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>
                    Your Addresses
                </Text>
                <Pressable
                    onPress={() => { navigation.navigate('EnterNewAddress') }}
                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, borderWidth: 1, paddingVertical: 10, borderLeftWidth: 0, borderRightWidth: 0 }}>
                    <Text>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
                {/* display all the saved addresses */}
                <View>
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
                            <Pressable style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                <Text>Edit</Text>
                            </Pressable>
                            <Pressable style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                <Text>Remove</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => navigation.navigate("Home")}
                                style={{ borderWidth: 1, borderRadius: 5, borderColor: '#AAA', padding: 5 }}>
                                <Text>Set as default</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default YourAddressesScreen

const styles = StyleSheet.create({})