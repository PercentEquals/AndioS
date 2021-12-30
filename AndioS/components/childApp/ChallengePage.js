import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import { Pedometer } from 'expo-sensors';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge, datesAreOnSameDay } from '../Store'

import styles from '../Styles';

function ChallengePage({ route, navigation }) {
    const { challenge } = route.params;

    const [steps, setSteps] = React.useState(0);
    const [maxSteps, setMaxSteps] = React.useState(0);
    const [watched, setWatched] = React.useState(false);

    useEffect(() => {
        for (const dates of challenge.dates) {
            if (!datesAreOnSameDay(new Date(dates.date), new Date())) {
                setMaxSteps(dates.steps);
                break;
            }
        };

        Pedometer.isAvailableAsync().then(available => {
            if (available && !watched) {
                Pedometer.requestPermissionsAsync().then((response) => {
                    if (response.granted) {
                        Pedometer.watchStepCount(result => {
                            setSteps(result.steps);
                            console.log(result.steps);
                        });
                        setWatched(true);
                    }
                });
            }
        });

        if (steps >= maxSteps && maxSteps != 0) {
            challenge.dates.find(dates => datesAreOnSameDay(dates.date, new Date())).finished = true;
            modifyChallenge(challenge);

            alert(localize('challenge-finished'));
            navigation.pop();
        }
    }, []);

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('walk')} 🚶</Text>
                <Text style={{fontSize: 20}}>{steps} / {maxSteps}</Text>
            </View>
        </SafeAreaView >
    );
}

export default ChallengePage;