import React, { useState, useEffect, useRef } from 'react';

import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

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
            if (!datesAreOnSameDay(new Date(dates.date), new Date())) {
                isSameDay = datesHourDiff(new Date(dates.date), new Date()) - 12;
                return;
            }
        }

        if (isSameDay !== null && isSameDay > 12) {
            alert(localize('you-need-to-wait') + isSameDay + ' ' + localize('hours'));
            navigation.pop();
        }
    }, []);

    const finishChall = async () => {
        challenge.dates.find(dates =>
            new Date(dates.date).getTime() > new Date().getTime() && dates.finished === false
        ).finished = true;
        await modifyChallenge(challenge);

        alert(localize('challenge-finished'));
        navigation.pop();
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