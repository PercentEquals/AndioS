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
        flexGrow: 1,
    },
    header: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    subheader: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    button: {
        borderColor: '#fff',
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 10,
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
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: 300,
        marginBottom: 20,
    }
});

export default styles;