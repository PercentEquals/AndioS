import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    header: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 35,
    },
    button: {
        borderColor: '#fff',
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        minWidth: 250,
        alignItems: 'center',
    },
    buttonText: { 
        color: '#000',
        fontSize: 26,
        padding: 20,
    },
    buttonTextSmaller: {
        color: '#000',
        fontSize: 18,
        padding: 10,
    }
});

export default ParentPage;