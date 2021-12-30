import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges, modifyChallenge } from '../Store'

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenPage({navigation}) {
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


                {   remaining === 0 && 
                    <>
                        <Text style={styles.subheader}>{localize('no-challenges-header')} 😕</Text>
                        <Text style={styles.subheader}>{localize('no-challenges-subheader')}</Text>
                    </>
                }

                <ScrollView>
                    {
                        remaining !== 0 && challenges.map(challenge => {
                            return (!challenge.finished && <Challenge key={challenge.id} challenge={challenge} buttonText={localize('start') + " 🔥"} onPress={ () => {
                                navigation.navigate('Challenge', { challenge: challenge });
                            }} />)
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ChildrenPage;