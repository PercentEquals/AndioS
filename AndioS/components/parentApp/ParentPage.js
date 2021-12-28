import React from 'react';

import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentPage({ navigation }) {
    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ParentChallangePage') }}>
                    <Text style={styles.buttonTextSmaller}>{localize('challenge-list')} 📖</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {borderRadius: 10}]} onPress={() => { navigation.navigate('ParentAddMoveChall') }}>
                    <Text style={{fontSize: 40, padding: 20}}>🏃</Text>
                    <Text style={styles.buttonTextSmaller}>{localize('add-movement-challenge')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonTextSmaller}>{localize('add-custom-challenge')} ➕</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ParentPage;