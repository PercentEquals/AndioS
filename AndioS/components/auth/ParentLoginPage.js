import React, { useEffect, useState } from 'react';

import { Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { KeycodeInput } from 'react-native-keycode'

import * as Crypto from 'expo-crypto';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentPage({ navigation }) {
    const [expectedPassword, setExpectedPassword] = useState('');
    const [password, setPassword] = useState('');

    async function savePasswordAndNavigateToParentApp() {
        const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
        setExpectedPassword(digest);

        await AsyncStorage.setItem('expectedPassword', digest);
        navigation.navigate('Parent');
    }

    async function register() {
        Alert.alert(localize('register'), localize('password-confirm'), [
            { text: localize('yes'), onPress: async () => await savePasswordAndNavigateToParentApp() },
            { text: localize('no'), onPress: () => {} },
        ]);
    }

    async function getExpectedPassword() {
        const expectedPassword = await AsyncStorage.getItem('expectedPassword');
        if (expectedPassword) {
            setExpectedPassword(expectedPassword);
        }
    }

    async function login() { 
        const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
        await getExpectedPassword();

        if (digest === expectedPassword) {
            navigation.navigate('Parent');
        }
        else {
            Alert.alert(localize('login-error'), localize('wrong-password'));
        }
    }

    async function navigateToParentApp() {
        if (password.length !== 4) {
            return;
        }
        else if (expectedPassword.length === 0) {
            await register();
        }
        else
        {
            await login();
        }
    }

    useEffect(() => {
        getExpectedPassword();
    });

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                {expectedPassword.length === 0 && <Text style={styles.header}>{localize('register')} 🔒</Text>}
                {expectedPassword.length > 0 && <Text style={styles.header}>{localize('login')} 🔒</Text>}

                <View style={{backgroundColor: '#FFF', padding: 20, borderRadius: 5}}>
                    <KeycodeInput
                        value={password}
                        numeric={true}
                        onChange={(value) => {
                            setPassword(value);
                        }}
                    />
                </View>

                <TouchableOpacity style={[styles.button, {marginTop:20}]} onPress={navigateToParentApp}>
                    <Text style={styles.buttonTextSmaller}>{localize('next') + ' ➡'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ParentPage;