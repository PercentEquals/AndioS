import React, { useState, useEffect, useRef } from 'react';

import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge, datesAreOnSameDay, datesHourDiff } from '../Store'

import styles from '../Styles';

function ChallengePage({ route, navigation }) {
    const { challenge } = route.params;

    useEffect(() => {
        navigation.setOptions({ headerTitle: challenge.title });

        let isSameDay = null;

        for (const dates of challenge.dates) {
            if (!dates.done && isSameDay === null) {
                if (new Date(dates.date).getTime() > new Date().getTime()) {
                    isSameDay = datesHourDiff(new Date(dates.date), new Date());
                }
            }
        }

        if (isSameDay !== null && isSameDay > 12) {
            alert(localize('you-need-to-wait') + isSameDay + ' ' + localize('hours'));
            navigation.pop();
        }
    }, []);

    const finishChall = async () => {
        Alert.alert(localize('are-you-sure'), localize('have-you-finished'), [
            { text: localize('yes'), onPress: async () => { 
                challenge.dates.find(date =>
                    new Date(date.date).getTime() > new Date().getTime() && date.done === false
                ).done = true;

                if (challenge.dates[challenge.dates.length - 1].done) {
                    challenge.finished = true;
                }

                await modifyChallenge(challenge);
        
                alert(localize('challenge-finished'));
                navigation.pop();
                navigation.pop();
            }},
            { text: localize('no'), onPress: () => {}},
        ]);
    };

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.subheader}>{challenge.chall}</Text> 
                <TouchableOpacity onPress={finishChall}>
                    <Text style={[styles.input, {textAlign: 'center'}]}>{localize('click-me-complete')}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

export default ChallengePage;