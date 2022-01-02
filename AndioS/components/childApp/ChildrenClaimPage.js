import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { getChallenges, modifyChallenge } from '../Store'

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenClaimPage({ route, navigation }) {
    const { challenge } = route.params;

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('rewards')} 🏆</Text>

                <Text style={{fontSize: 20}}>{challenge.title} [{challenge.dates[0].date.split('T')[0]}]</Text>
                <View style={{backgroundColor: '#FFF', padding: 20, borderRadius: 5, marginTop: 5}}>
                    <Text style={{color: '#000', width: 200, fontSize: 20}}>{challenge.reward}</Text>
                </View>
                { challenge.file && challenge.file.realUri.length > 0 &&
                <TouchableOpacity style={[styles.button, {borderRadius: 10, marginTop: 10}]} onPress={async () => { 
                    try {
                        const cUri = await FileSystem.getContentUriAsync(`file:///${challenge.file.realUri.replace('file:///', '')}`);
                        await IntentLauncher.startActivityAsync('android.intent.action.VIEW', { data: cUri }) 
                    } catch (e) {
                        alert('Error: ' + e);
                    }
                }}>
                    <Text style={{fontSize: 40, padding: 20}}>📁</Text>
                    <Text style={styles.buttonTextSmaller}>{localize('open-reward-file')}</Text>
                </TouchableOpacity>
                }
            </View>
        </SafeAreaView >
    );
}

export default ChildrenClaimPage;