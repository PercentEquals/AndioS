import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge } from '../Store'

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenRewardPage({ navigation }) {
    const [challenges, setChallenges] = React.useState([]);

    useEffect(() => {
        getChallenges().then(challenges => {
            setChallenges(challenges);
        });
    }, []);

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('rewards')} 🏆</Text>

                <ScrollView>
                    {
                        challenges.map(challenge => {
                            let finishedCount = 0;
                            let count = 0
                            let rewarded = false;

                            challenge.dates.forEach(date => {
                                finishedCount += date.done ? 1 : 0;
                                count += 1;
                            });

                            if (finishedCount > 0.75 * count) {
                                rewarded = true;
                            }

                            if (rewarded) {
                                return (
                                    challenge.finished && <Challenge key={challenge.id} challenge={challenge} buttonText={localize('claim') + " 🥇"} onPress={() => {
                                        navigation.navigate('ChildrenClaim', { challenge });
                                    }} />
                                )
                            }
                            else {
                                return (
                                    challenge.finished && <Challenge key={challenge.id} challenge={challenge} buttonText={localize('claim-fail') + " 😔"} />
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ChildrenRewardPage;