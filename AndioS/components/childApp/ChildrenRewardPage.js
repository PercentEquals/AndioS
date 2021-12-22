import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge } from '../Store'

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenRewardPage() {
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
                        challenges.map(challenge =>
                            challenge.finished && <Challenge key={challenge.id} challenge={challenge}  />
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ChildrenRewardPage;