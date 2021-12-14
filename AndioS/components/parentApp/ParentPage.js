import React from 'react';

import { Text, View, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentPage() {
    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('welcome')} 👋</Text>
            </View>
        </SafeAreaView>
    );
}

export default ParentPage;