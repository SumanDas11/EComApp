import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../styles/colors';


const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ height: 100, backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }} />

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Welcome Suman Das</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Pressable
                        style={{ backgroundColor: colors.blackOpacity20, padding: 10, width: '45%', alignItems: 'center', borderRadius: 20 }}
                    >
                        <Text>Your orders</Text>
                    </Pressable>
                    <Pressable
                        style={{ backgroundColor: colors.blackOpacity20, padding: 10, width: '45%', alignItems: 'center', borderRadius: 20 }}
                    >
                        <Text>Your account</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Pressable
                        style={{ backgroundColor: colors.blackOpacity20, padding: 10, width: '45%', alignItems: 'center', borderRadius: 20 }}
                    >
                        <Text>Buy again</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => { navigation.navigate("Login") }}
                        style={{ backgroundColor: colors.blackOpacity20, padding: 10, width: '45%', alignItems: 'center', borderRadius: 20 }}
                    >
                        <Text>Logout</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})