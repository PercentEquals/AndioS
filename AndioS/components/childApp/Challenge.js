import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from '../Styles';

function Challenge({ title }) {
    return (  
        <View style={challengeStyles.challenge}>
            <View style={challengeStyles.wrapText}>
                <Text style={challengeStyles.text}>{title}</Text>
            </View>
            <TouchableOpacity style={challengeStyles.button} onPress={() => {}}>
                <Text style={challengeStyles.buttonText}>Start 🔥</Text>
            </TouchableOpacity>
            <Text style={challengeStyles.timer}>⏱️ Pozostały 2h</Text>
        </View>
    );
}

var challengeStyles = StyleSheet.create({
    challenge: {
        display: 'block',
        flexDirection: 'coulumn',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: 300,
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
    },
    button: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#FFB404',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        padding: 6,
        color: '#000',
    },
    wrapText: {
        flex: 1,
        flexDirection: 'row',
    },
    timer: {
        fontSize: 12,
        padding: 5,
        position: 'absolute',
        bottom: 35,
        pointerEvents: 'none',
        color: '#438029',
    }
});

export default Challenge;