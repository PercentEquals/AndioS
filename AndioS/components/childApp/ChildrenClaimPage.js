import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

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
            </View>
        </SafeAreaView >
    );
}

export default ChildrenClaimPage;