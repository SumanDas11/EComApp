import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ButtonComp from '../components/ButtonComp';

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
        };
        // send a POST  request to the backend API to register the user
        axios
            .post("http://localhost:8000/register", user)
            .then((response) => {
                console.log("Post response from RegisterScreen.js: ", response);
                Alert.alert(
                    "Registration successful",
                    "You have been registered Successfully"
                );
                setName("");
                setEmail("");
                setPassword("");
                navigation.navigate("Login");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration Error",
                    "An error occurred while registering"
                );
                console.log("Registration failed at POST request", error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('Data:', error.response.data);
                    console.log('Status:', error.response.status);
                    console.log('Headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log('Request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error Message:', error.message);
                }
                console.log('Config:', error.config);
            });
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 150, height: 100, alignSelf: 'center' }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Register your account</Text>
                </View>

                {/* login form */}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    {/* Name input field*/}
                    <View style={{ flexDirection: 'row', backgroundColor: "#D0D0D0", padding: 5, gap: 5, borderRadius: 5, marginTop: 20 }}>
                        <MaterialIcons name="person" size={24} color="gray" />
                        <TextInput value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder='enter your name'
                            style={{ width: 300 }} />
                    </View>
                    {/* UN input field*/}
                    <View style={{ flexDirection: 'row', backgroundColor: "#D0D0D0", padding: 5, gap: 5, borderRadius: 5, marginTop: 20 }}>
                        <MaterialIcons name="email" size={24} color="gray" />
                        <TextInput value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='enter your email'
                            style={{ width: 300 }} />
                    </View>
                    {/* PW input field*/}
                    <View style={{ flexDirection: 'row', backgroundColor: "#D0D0D0", padding: 5, gap: 5, borderRadius: 5, marginTop: 20 }}>
                        <MaterialIcons name="lock-outline" size={24} color="gray" />
                        <TextInput value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            placeholder='enter your password'
                            style={{ width: 300 }} />
                    </View>
                </View>
                {/* keep logged in and forgot PW row */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: '#007FFF' }}>Forgot password</Text>
                </View>
                {/* Register button */}
                {/* <Pressable
                    onPress={handleRegister}
                    style={{ marginTop: 50, backgroundColor: "#FEBE10", padding: 15, width: 200, alignSelf: 'center', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'white' }}>Register</Text>
                </Pressable> */}
                <ButtonComp
                    btnText={'Register'}
                    onClick={handleRegister}
                    btnStyle={{ width: 200, marginTop: 50, alignSelf: 'center' }}
                />
                {/* already have an acc row */}
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', color: "gray" }}>Already have an account? Sign In</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})