import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { UserContext } from '../UserContext';
import User from '../api/models/user';
import ButtonComp from '../components/ButtonComp';
import colors from '../styles/colors';
import navigationStrings from '../constants/navigationStrings';


const LoginScreenInitial = () => {
    // const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleLogin = async () => {
        const user = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post("http://localhost:8000/login", user);
            console.log("response.status", response.status);
            // const userLoggedIn = await User.findOne({ email });
            // console.log("userLoggedIn: ", userLoggedIn);
            if (response.status === 200) {
                console.log("inside if statement");

                // const userData = response.data;
                // setUser(userData);
                // console.log("userData: ", userData);
                // console.log("Post response from LoginScreen.js: ", response);
                // navigation.replace("Main");
                navigation.replace(navigationStrings.MAIN);
                Alert.alert(
                    "Login successful",
                    "Happy shopping :)"
                );
            } else {
                console.log("Invalid credential");
                console.log(response.data.message);
            }
        } catch (error) {
            console.log("login error: ", error);
        }
        // const userLoggedIn = await User.findOne({ email });
        // console.log("user: ", user);
        // axios.post("http://localhost:8000/login", user)
        //     .then((response) => {
        //         // console.log("Post response from LoginScreen.js: ", response);
        //         console.log("response.data.message: ", response.data.message);
        //         console.log("response.status: ", response.status);
        //         navigation.replace("Main");
        //         Alert.alert(
        //             "Login successful",
        //             "Happy shopping :)"
        //         );
        //         // const userData = await response.json();
        //         // setUser(userData);

        //     })
        //     .catch((error) => {
        //         Alert.alert(
        //             "Login Error",
        //             "An error occurred while logging in"
        //         );
        //         console.log("Login failed at POST request from LoginScreen.js", error);
        //         if (error.response) {
        //             // The request was made and the server responded with a status code
        //             // that falls out of the range of 2xx
        //             // const errorData = error.response.data;
        //             // Alert.alert("Error", error.message)
        //             console.log('Data.message:', error.response.data.message);
        //             // console.error('Status:', error.response.status);
        //             // console.error('Headers:', error.response.headers);
        //         } else if (error.request) {
        //             // The request was made but no response was received
        //             console.log('Request:', error.request);
        //         } else {
        //             // Something happened in setting up the request that triggered an Error
        //             console.log('Error Message:', error.message);
        //         }
        //         // console.error('Config:', error.config);
        //     });
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 150, height: 100, alignSelf: 'center' }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
                <KeyboardAvoidingView>
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Login to your account</Text>
                    </View>

                    {/* login form */}
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        {/* UN input field*/}
                        <View style={{ flexDirection: 'row', backgroundColor: "#D0D0D0", padding: 5, gap: 5, borderRadius: 5, marginTop: 20 }}  >
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
                    {/* Login button */}
                    {/* <Pressable
                        onPress={handleLogin}
                        style={{ marginTop: 50, backgroundColor: "#FEBE10", padding: 15, width: 200, alignSelf: 'center', borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'white' }}>Login</Text>
                    </Pressable> */}
                    <ButtonComp
                        btnText={'Login'}
                        onClick={handleLogin}
                        btnStyle={{ width: 200, marginTop: 50, alignSelf: 'center' }}
                    />
                    {/* dont have an acc row */}
                    <Pressable
                        onPress={() => navigation.navigate(navigationStrings.REGISTER)}
                        style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: colors.blackOpacity50 }}>Don't have an account? Sign Up</Text>
                    </Pressable>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})