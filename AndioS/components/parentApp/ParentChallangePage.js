import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView, Alert } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge, removeChallenge } from '../Store'

import styles from '../Styles';
import Challenge from '../childApp/Challenge';

function ParentChallangePage({ navigation }) {
    const [challenges, setChallenges] = React.useState([]);
    const [remaining, setRemaining] = React.useState(0);

    useEffect(() => {
        getChallenges().then(challenges => {
            setChallenges(challenges);

            setRemaining(0);
            for (const challenge of challenges) {
                if (!challenge.finished) {
                    if (new Date(challenge.dates[challenge.dates.length - 1].date) < new Date().getTime()) {
                        challenge.finished = true;
                        modifyChallenge(challenge);
                    }
                    else {
                        setRemaining(remaining + 1);
                    }
                }
            }
        });
    }, []);

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('challenges')} 🏆</Text>

                <ScrollView>
                    {
                        challenges.map(challenge => {
                            if (new Date(challenge.dates[0].date).getTime() > new Date().getTime()) {
                                return <Challenge key={challenge.id} challenge={challenge} buttonText={localize('cancel') + " ❌"} onPress={() => { 
                                    Alert.alert(localize('are-you-sure'), "", [
                                        { text: localize('yes'), onPress: async () => { await removeChallenge(challenge); navigation.pop() }},
                                        { text: localize('no'), onPress: () => {}},
                                    ]);
                                }} />
                            }
                            else {
                                return <Challenge key={challenge.id} challenge={challenge} />
                            }
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ParentChallangePage;