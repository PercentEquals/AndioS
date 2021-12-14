import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function LandingPage({ navigation }) {
    return (  
        <View style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('welcome')} 👋</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Children')}>
                    <Text style={styles.buttonText}>{localize('start') + ' 💪'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Parent')}>
                    <Text style={styles.buttonTextSmaller}>{localize('parent-zone') + ' 🔐'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LandingPage;