import React from 'react';

import { Text, View, ScrollView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';
import Challenge from './Challenge';

function ChildrenPage() {
    return (  
        <View style={styles.container}>
            <Background />

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.header}>Challenges 🏆</Text>

                <View>
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 1769879870 pompek" />
                    <Challenge title="Zrób 1769879870 pompek" />
                    <Challenge title="Zrób 1769879870176987987017698798701769879870 pompek" />
                    <Challenge title="Zrób 1769879870176 98798701 7698798701 769879870 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                    <Challenge title="Zrób 10 pompek" />
                </View>
            </ScrollView>
        </View >
    );
}

export default ChildrenPage;