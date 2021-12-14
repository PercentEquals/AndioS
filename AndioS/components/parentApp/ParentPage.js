import React from 'react';

import { Text, View } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentPage() {
    return (  
        <View style={styles.container}>
            <Background />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('welcome')} 👋</Text>
            </View>
        </View>
    );
}

export default ParentPage;