import React, { useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { getChallenges } from '../Store'

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenPage() {
    const [challenges, setChallenges] = React.useState([]);

    useEffect(() => {
        getChallenges().then(challenges => setChallenges(challenges));
    }, []);

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('challenges')} 🏆</Text>


                {   challenges.length === 0 && 
                    <>
                        <Text style={styles.subheader}>{localize('no-challenges-header')} 😕</Text>
                        <Text style={styles.subheader}>{localize('no-challenges-subheader')}</Text>
                    </>
                }

                <ScrollView>
                    {
                        challenges.length !== 0 && challenges.map(challenge => 
                            <Challenge key={challenge.id} challenge={challenge}  />
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ChildrenPage;