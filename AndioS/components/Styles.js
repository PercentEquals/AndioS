import React from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        maxHeight: '100%',
    },
    header: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
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

export default styles;