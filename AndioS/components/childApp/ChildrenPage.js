import React from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenPage() {
    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('challenges')} 🏆</Text>

                <Text style={styles.subheader}>{localize('no-challenges-header')} 😕</Text>
                <Text style={styles.subheader}>{localize('no-challenges-subheader')}</Text>

                <ScrollView>
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ChildrenPage;