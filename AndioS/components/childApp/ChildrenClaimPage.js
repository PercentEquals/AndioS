import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

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
                { challenge.file.uri.length > 0 &&
                <TouchableOpacity style={[styles.button, {borderRadius: 10, marginTop: 10}]} onPress={async () => { 
                    try {
                        // const fileBuffor = `${FileSystem.documentDirectory}AndioS\buffer`;
                        // console.log(fileBuffor)
                        // await FileSystem.copyAsync({ from: `file:/${challenge.file.uri}`, to: fileBuffor });
                        // console.log("test")
                        // const cUri = await FileSystem.getContentUriAsync(fileBuffor);
                        //await IntentLauncher.startActivityAsync('android.intent.action.VIEW', { data: challenge.file.uri }) 
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