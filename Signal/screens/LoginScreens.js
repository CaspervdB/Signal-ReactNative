import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreens = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                navigation.replace('Home');
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light' />

            <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg',
            }}
            style={{width: 200, height: 200}} 
            />
            <View style={styles.inputContainer}>
                <Input placeholder='email' 
                autofocus
                type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input placeholder='password' 
                secureTextEntry
                type='password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Button title='login' containerStyle={styles.button} onPress={signIn} />
            <Button title='register' onPress={() => navigation.navigate('Register')} type='outline' containerStyle={styles.button} />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreens

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
